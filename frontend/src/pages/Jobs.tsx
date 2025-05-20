import Footer from "@/components/Footer";
import { useState } from "react";

const levels = ["Entry", "Mid", "Senior"];
const sectors = ["Engineering Jobs", "AI Research", "Machine Learning", "NLP", "Data Science", "Robotics"];
const locations = [
  "San Francisco, CA", "Remote, US", "New York, NY", "London, UK", "Berlin, Germany", "Toronto, Canada", "Sydney, Australia", "Bangalore, India", "Paris, France", "Tokyo, Japan", "Pomfret, Charles County", "Nationwide, US", "Enon, VA", "Spotsylvania County, VA", "Fredericksburg City, VA"
];

const dummyJobs = Array.from({ length: 30 }).map((_, i) => ({
  title: `AI Job Position ${i + 1}`,
  company: `Company ${i % 10 + 1}`,
  location: locations[i % locations.length],
  rating: (4.0 + (i % 10) * 0.1).toFixed(1),
  sector: sectors[i % sectors.length],
  level: levels[i % levels.length],
  description: `This is a ${levels[i % levels.length]}-level position in ${sectors[i % sectors.length]}. Work at ${locations[i % locations.length]}.`
}));

export default function Jobs() {
  const [level, setLevel] = useState("");
  const [sector, setSector] = useState("");
  const [location, setLocation] = useState("");

  const filteredJobs = dummyJobs.filter(job =>
    (!level || job.level === level) &&
    (!sector || job.sector === sector) &&
    (!location || job.location === location)
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">AI Job Offers</h1>
        <div className="flex gap-4 mb-6 flex-wrap">
          <select value={level} onChange={e => setLevel(e.target.value)} className="border rounded px-3 py-2">
            <option value="">All Levels</option>
            {levels.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
          <select value={sector} onChange={e => setSector(e.target.value)} className="border rounded px-3 py-2">
            <option value="">All Sectors</option>
            {sectors.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={location} onChange={e => setLocation(e.target.value)} className="border rounded px-3 py-2">
            <option value="">All Locations</option>
            {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </div>
        <div className="overflow-y-auto" style={{ maxHeight: 600 }}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col gap-2 border">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{job.title}</h2>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{job.sector}</span>
                </div>
                <div className="text-gray-600 text-sm">{job.company} &bull; {job.location}</div>
                <div className="text-yellow-500 text-sm">Rating: {job.rating} ★</div>
                <div className="text-xs text-gray-500">Level: {job.level}</div>
                <p className="text-gray-700 mt-2">{job.description}</p>
                <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition">View offer</button>
              </div>
            ))}
            {filteredJobs.length === 0 && <div className="col-span-3 text-center text-gray-500">No jobs found for selected filters.</div>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 