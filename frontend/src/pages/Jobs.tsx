import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useData } from "@/contexts/DataContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AikinButton from "@/components/AikinButton";
import { useNavigate } from "react-router-dom";

const levels = ["Entry", "Mid", "Senior"];
const sectors = ["Engineering Jobs", "AI Research", "Machine Learning", "NLP", "Data Science", "Robotics"];
const locations = [
  "Remote",
  "India Bangalore",
  "India Hyderabad",
  "India Gurugram",
  "India Pune",
  "India Mumbai",
  "Outside India"
];

const API_BASE_URL = "https://backend-service-production-3bc1.up.railway.app";

export default function Jobs() {
  const { user } = useData();
  const isVerified = user?.isAdmin || user?.isVerified;
  const isAdmin = user?.isAdmin;
  const [level, setLevel] = useState("");
  const [sector, setSector] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showJobDialog, setShowJobDialog] = useState(false);
  const [jobForm, setJobForm] = useState({ title: '', company: '', location: '', description: '', level: '', sector: '', link: '' });
  const [jobSuccess, setJobSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/jobs`);
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      setJobs([]);
    }
    setLoading(false);
  };

  const handleJobSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting job:', jobForm, user?.email || "anon");
    try {
      await fetch(`${API_BASE_URL}/api/jobs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...jobForm, postedBy: user?.email || "anon" })
      });
      setJobSuccess(true);
      setShowJobDialog(false);
      setJobForm({ title: '', company: '', location: '', description: '', level: '', sector: '', link: '' });
      fetchJobs();
      setTimeout(() => setJobSuccess(false), 2000);
    } catch (err) {
      alert("Failed to post job");
    }
  };

  const handleDeleteJob = async (jobId) => {
    if (!window.confirm('Are you sure you want to delete this job?')) return;
    try {
      await fetch(`${API_BASE_URL}/api/jobs/${jobId}`, { method: 'DELETE' });
      setJobs(prev => prev.filter(job => job.id !== jobId));
    } catch (err) {
      alert('Failed to delete job');
    }
  };

  const filteredJobs = jobs.filter(job =>
    (!level || job.level === level) &&
    (!sector || job.sector === sector) &&
    (!location || job.location === location)
  );

  return (
    <div className="min-h-screen bg-[#151c28] flex flex-col">
      <div className="container py-8 flex-1">
        <Button
          variant="outline"
          className="mb-6 bg-transparent text-gray-300 border-none hover:bg-[#232b3b] hover:text-white"
          onClick={() => navigate('/', { replace: true, state: { forceShowMain: true } })}
        >
          ← Back to Home
        </Button>
        <h1 className="text-4xl font-extrabold mb-6 text-white">AI Job Offers</h1>
        {isVerified && (
          <Button className="mb-6 bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setShowJobDialog(true)}>
            Submit Job
          </Button>
        )}
        <Dialog open={showJobDialog} onOpenChange={setShowJobDialog}>
          <DialogContent className="sm:max-w-[500px] bg-[#232b3b] text-white">
            <DialogHeader>
              <DialogTitle className="text-white">Submit a Job Opportunity</DialogTitle>
            </DialogHeader>
            {jobSuccess ? (
              <div className="text-green-400 text-center py-4">Job posted successfully!</div>
            ) : (
              <form className="flex flex-col gap-3" onSubmit={handleJobSubmit}>
                <input className="bg-[#151c28] border-none rounded px-3 py-2 text-white placeholder-gray-400" placeholder="Job Title" value={jobForm.title} onChange={e => setJobForm({ ...jobForm, title: e.target.value })} required />
                <input className="bg-[#151c28] border-none rounded px-3 py-2 text-white placeholder-gray-400" placeholder="Company Name" value={jobForm.company} onChange={e => setJobForm({ ...jobForm, company: e.target.value })} required />
                <input className="bg-[#151c28] border-none rounded px-3 py-2 text-white placeholder-gray-400" placeholder="Location" value={jobForm.location} onChange={e => setJobForm({ ...jobForm, location: e.target.value })} required />
                <select className="bg-[#151c28] border-none rounded px-3 py-2 text-white" value={jobForm.level} onChange={e => setJobForm({ ...jobForm, level: e.target.value })} required>
                  <option value="">Select Level</option>
                  {levels.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
                <select className="bg-[#151c28] border-none rounded px-3 py-2 text-white" value={jobForm.sector} onChange={e => setJobForm({ ...jobForm, sector: e.target.value })} required>
                  <option value="">Select Sector</option>
                  {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <input className="bg-[#151c28] border-none rounded px-3 py-2 text-white placeholder-gray-400" placeholder="Job Posting Link" type="url" value={jobForm.link} onChange={e => setJobForm({ ...jobForm, link: e.target.value })} required />
                <textarea className="bg-[#151c28] border-none rounded px-3 py-2 text-white placeholder-gray-400" placeholder="Job Description" value={jobForm.description} onChange={e => setJobForm({ ...jobForm, description: e.target.value })} required />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-2">Submit Job</Button>
              </form>
            )}
          </DialogContent>
        </Dialog>
        <div className="flex gap-4 mb-6 flex-wrap">
          <select value={level} onChange={e => setLevel(e.target.value)} className="bg-[#232b3b] text-gray-200 border-none rounded px-3 py-2 focus:ring-2 focus:ring-blue-500">
            <option value="">All Levels</option>
            {levels.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
          <select value={sector} onChange={e => setSector(e.target.value)} className="bg-[#232b3b] text-gray-200 border-none rounded px-3 py-2 focus:ring-2 focus:ring-blue-500">
            <option value="">All Sectors</option>
            {sectors.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={location} onChange={e => setLocation(e.target.value)} className="bg-[#232b3b] text-gray-200 border-none rounded px-3 py-2 focus:ring-2 focus:ring-blue-500">
            <option value="">All Locations</option>
            {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </div>
        <div className="overflow-y-auto" style={{ maxHeight: 600 }}>
          {loading ? (
            <div className="text-center text-gray-400">Loading jobs...</div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredJobs.filter(job => job.id).map((job, idx) => (
                <div key={job.id} className="bg-[#232b3b] rounded-lg shadow-lg p-6 flex flex-col gap-2 border border-[#232b3b] hover:border-blue-600 transition">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">{job.title}</h2>
                    {isAdmin && (
                      <button
                        className="ml-2 px-3 py-1 bg-red-900 text-red-300 rounded hover:bg-red-700 transition text-xs font-semibold"
                        onClick={() => handleDeleteJob(job.id)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                  <div className="text-gray-400 text-sm">{job.company} &bull; {job.location} &bull; {job.level} &bull; {job.sector}</div>
                  <p className="text-gray-200 mt-2">{job.description}</p>
                  {job.link && (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-blue-400 hover:underline text-sm font-medium"
                    >
                      View Job Posting
                    </a>
                  )}
                  {job.postedBy && <div className="text-xs text-gray-500 mt-2">Posted by: {job.postedBy}</div>}
                </div>
              ))}
              {filteredJobs.length === 0 && <div className="col-span-3 text-center text-gray-500">No jobs found for selected filters.</div>}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
} 