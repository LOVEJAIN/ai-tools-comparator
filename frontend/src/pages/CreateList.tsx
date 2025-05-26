import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { aiTools } from "../data/aiTools";
import { useData } from "@/contexts/DataContext";

const CreateList = () => {
  const { user } = useData();
  const [title, setTitle] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const addList = location.state?.addList;

  // If not logged in, redirect to home after a short delay
  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => navigate("/"), 2000);
      return () => clearTimeout(timer);
    }
  }, [user, navigate]);

  // If addList is missing, show a message and back button
  if (!addList) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 p-4">
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-xl flex flex-col gap-6 items-center">
          <h2 className="text-2xl font-bold text-center text-primary mb-2">Oops!</h2>
          <p className="text-center text-lg text-gray-600 mb-4">You must use the 'Create List' button on the main page to add a list.</p>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    if (selected.length === 0) {
      setError("Select at least one tool.");
      return;
    }
    const newList = {
      id: Date.now().toString(),
      title,
      creator: user?.email || "anon",
      toolIds: selected,
    };
    if (addList) addList(newList);
    navigate("/", { state: { newList } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 p-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-xl flex flex-col gap-6">
        <button onClick={() => navigate("/")} className="self-start text-blue-600 hover:underline text-lg mb-2">← Back</button>
        <h2 className="text-3xl font-extrabold text-center text-primary mb-2">Create a Public List</h2>
        <p className="text-center text-lg text-gray-600 mb-4">Give your list a fun name and pick your favorite AI tools!</p>
        {!user && <div className="mb-2 text-red-600 text-center font-semibold">You must be logged in to create a list. Redirecting...</div>}
        {error && <div className="mb-2 text-red-600 text-center font-semibold">{error}</div>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="List Title* (e.g. My Top AI Tools)"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="border-2 border-blue-200 rounded-xl px-5 py-4 text-xl focus:outline-none focus:border-blue-400 transition"
            required
            disabled={!user}
          />
          <div>
            <div className="mb-2 font-bold text-lg text-primary">Select AI Tools</div>
            <div className="max-h-56 overflow-y-auto border rounded-xl p-3 grid grid-cols-2 gap-3 bg-blue-50">
              {aiTools.map(tool => (
                <label key={tool.id} className="flex items-center gap-3 cursor-pointer text-lg">
                  <input
                    type="checkbox"
                    checked={selected.includes(tool.id)}
                    onChange={e => {
                      if (e.target.checked) setSelected([...selected, tool.id]);
                      else setSelected(selected.filter(id => id !== tool.id));
                    }}
                    className="w-5 h-5 rounded-lg accent-blue-500"
                    disabled={!user}
                  />
                  <span className="font-medium">{tool.name}</span>
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className={`rounded-xl px-6 py-4 font-bold text-2xl flex items-center justify-center gap-3 transition shadow-lg ${user ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'}`}
            disabled={!user}
            title={user ? '' : 'You must be logged in to create a list'}
          >
            <span className="text-2xl">💾</span> Save List
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateList; 