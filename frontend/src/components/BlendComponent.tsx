import React, { useState, useEffect } from 'react';
import { useData } from "@/contexts/DataContext";
import Modal from "./Modal";
import { toast } from "react-hot-toast";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, ChevronRight } from 'lucide-react';

const API_BASE_URL = "https://backend-service-production-3bc1.up.railway.app";

const BlendComponent = () => {
  const { user } = useData();
  console.log('Current user:', user);

  const [blendForm, setBlendForm] = useState({
    title: "",
    tools: "",
    useCaseTag: "",
    description: ""
  });
  const [blends, setBlends] = useState([]);

  // Verified user logic
  const [showVerifyDialog, setShowVerifyDialog] = useState(false);
  const isVerified = user?.isAdmin || user?.isVerified;

  useEffect(() => {
    const fetchBlends = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/blends`);
        if(response.ok) {
          const data = await response.json();
          setBlends(data);
        }
      } catch (error) {
        console.error("Error fetching blends:", error);
      }
    };

    fetchBlends();
  }, []);


  const handleBlendSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blendForm.title || !blendForm.tools || !blendForm.useCaseTag || !blendForm.description) {
      alert("All fields are required.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/blends`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blendForm),
      });

      if (response.ok) {
        const newBlend = await response.json();
        setBlends(prev => [newBlend, ...prev]);
        setBlendForm({ title: "", tools: "", useCaseTag: "", description: "" });
        toast.success("Blend submitted successfully!");
      } else {
        toast.error("Failed to submit blend.");
      }
    } catch (error) {
      console.error("Error submitting blend:", error);
      toast.error("An error occurred while submitting the blend.");
    }
  };

  const handleDeleteBlend = async (blendId) => {
    if (!window.confirm("Are you sure you want to delete this blend? This action cannot be undone.")) return;
    try {
      const response = await fetch(`${API_BASE_URL}/api/blends/${blendId}?${user?.isAdmin ? 'admin=true' : 'verified=true'}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setBlends(prev => prev.filter(b => b.id !== blendId));
        toast.success("Blend deleted successfully!");
      } else {
        toast.error("Failed to delete blend.");
      }
    } catch (error) {
      console.error("Error deleting blend:", error);
      toast.error("An error occurred while deleting the blend.");
    }
  };

  return (
    <section className="max-w-5xl mx-auto mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Blends: Combine Tools for Powerful Workflows
      </h2>
      <div className="overflow-x-auto pb-2">
        <div className="flex flex-col md:flex-row gap-8 w-full md:min-w-[700px]">
          {blends.map((blend, index) => (
            <Card
              key={blend.id || index}
              className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border-0 hover:shadow-2xl transition-all duration-300 group w-full md:min-w-[350px] md:max-w-[400px]"
            >
              <CardHeader className="pb-4 bg-gradient-to-r from-purple-50/50 to-pink-50/30 rounded-t-3xl">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">🎬</span>
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-700 group-hover:to-pink-700 transition-all">
                        {blend.title}
                      </CardTitle>
                      <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border border-purple-200 rounded-full px-3 py-1">
                        {blend.useCaseTag}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                      <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
                      <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                    <span>{blend.tools.split(',').length} tools</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-8 pb-8">
                {/* Tools List */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {blend.tools.split(',').map((tool, i) => (
                    <div
                      key={tool.trim()}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-200 cursor-pointer bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-gray-300`}
                    >
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <span className="font-medium">{tool.trim()}</span>
                      <Plus className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
                {/* Description */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl p-4 border border-gray-100">
                  <p className="text-gray-700 font-medium flex items-center gap-2">
                    <span className="text-purple-500">✨</span>
                    {blend.description}
                    <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-200" />
                  </p>
                </div>
                {isVerified && (
                  <button
                    className="mt-2 text-red-600 hover:text-red-800 text-lg font-bold bg-transparent border-none cursor-pointer"
                    title="Delete Blend"
                    onClick={() => handleDeleteBlend(blend.id)}
                  >
                    🗑️
                  </button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {user && (
        isVerified ? (
          <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 max-w-xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-center text-blue-700">Contribute Your Blend</h3>
            <form className="flex flex-col gap-3" onSubmit={handleBlendSubmit}>
              <input
                type="text"
                className="border rounded px-3 py-2"
                placeholder="Blend Title (e.g. Podcast Production)"
                value={blendForm.title}
                onChange={e => setBlendForm({ ...blendForm, title: e.target.value })}
                required
              />
              <input
                type="text"
                className="border rounded px-3 py-2"
                placeholder="Tools (comma separated, e.g. Riverside, Descript, Canva)"
                value={blendForm.tools}
                onChange={e => setBlendForm({ ...blendForm, tools: e.target.value })}
                required
              />
              <input
                type="text"
                className="border rounded px-3 py-2"
                placeholder="Use Case Tag (e.g. Audio, Content Creation)"
                value={blendForm.useCaseTag}
                onChange={e => setBlendForm({ ...blendForm, useCaseTag: e.target.value })}
                required
              />
              <textarea
                className="border rounded px-3 py-2"
                placeholder="Short Description"
                value={blendForm.description}
                onChange={e => setBlendForm({ ...blendForm, description: e.target.value })}
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition mt-2"
              >
                Submit Blend
              </button>
            </form>
          </div>
        ) : (
          <div className="mt-10 bg-white rounded-2xl shadow-lg p-8 max-w-xl mx-auto flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-center text-blue-700">Want to contribute your own blend?</h3>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition mb-4"
              onClick={() => setShowVerifyDialog(true)}
            >
              Become Verified
            </button>
            <Modal open={showVerifyDialog} onClose={() => setShowVerifyDialog(false)}>
              <div className="p-6 max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">Get Verified (Coming Soon)</h2>
                <ul className="mb-4 text-gray-700">
                  <li className="mb-2">✔️ Create AI Tool Blends</li>
                  <li className="mb-2">✔️ Create Public Lists</li>
                  <li className="mb-2">✔️ Early access to new features</li>
                </ul>
                <div className="flex flex-col gap-3">
                  <button className="bg-blue-200 text-blue-800 px-4 py-2 rounded cursor-not-allowed" disabled>Monthly Plan (Coming Soon)</button>
                  <button className="bg-blue-200 text-blue-800 px-4 py-2 rounded cursor-not-allowed" disabled>Yearly Plan (Coming Soon)</button>
                  <button className="bg-blue-200 text-blue-800 px-4 py-2 rounded cursor-not-allowed" disabled>One-time Plan (Coming Soon)</button>
                </div>
              </div>
            </Modal>
          </div>
        )
      )}
    </section>
  );
};

export default BlendComponent; 