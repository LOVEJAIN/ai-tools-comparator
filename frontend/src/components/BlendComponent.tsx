import React, { useState, useEffect } from 'react';
import { useData } from "@/contexts/DataContext";
import Modal from "./Modal";
import { toast } from "react-hot-toast";

const API_BASE_URL = "https://backend-service-production-3bc1.up.railway.app";

const BlendComponent = () => {
  const { user } = useData();

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
      <h2 className="text-2xl font-bold mb-6 text-center">Blends: Combine Tools for Powerful Workflows</h2>
      <div className="overflow-x-auto pb-2">
        <div className="flex flex-col md:flex-row gap-8 w-full md:min-w-[700px]">
          {blends.map((blend, index) => (
            <div key={blend.id || index} className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-2xl shadow-lg p-4 md:p-6 flex flex-col gap-3 w-full md:min-w-[350px] md:max-w-[400px]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-lg font-bold text-blue-700">{blend.title}</span>
                <span className="ml-auto text-xs bg-blue-200 text-blue-800 px-3 py-1 rounded-full">{blend.useCaseTag}</span>
                {isVerified && (
                  <button
                    className="ml-2 text-red-600 hover:text-red-800 text-lg font-bold bg-transparent border-none cursor-pointer"
                    title="Delete Blend"
                    onClick={() => handleDeleteBlend(blend.id)}
                  >
                    🗑️
                  </button>
                )}
              </div>
              <div className="flex gap-2 items-center mb-2 flex-wrap">
                {blend.tools.split(',').map((tool, i) => (
                  <React.Fragment key={i}>
                    <span className="bg-white rounded-full px-3 py-1 font-semibold text-gray-700 shadow">{tool.trim()}</span>
                    {i < blend.tools.split(',').length - 1 && <span className="text-xl font-bold text-gray-400">+</span>}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-gray-700 text-sm">{blend.description}</p>
            </div>
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