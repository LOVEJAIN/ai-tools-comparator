import { useState } from "react";
import { aiTools } from "../data/aiTools";
import { useData } from "@/contexts/DataContext";

interface CreateListFormProps {
  onSubmit: (list: any) => void;
  onCancel?: () => void;
  initialValues?: {
    id?: string;
    title?: string;
    selected?: string[];
    isPublic?: boolean;
  };
}

const CreateListForm: React.FC<CreateListFormProps> = ({ onSubmit, onCancel, initialValues }) => {
  const { user } = useData();
  const [title, setTitle] = useState(initialValues?.title || "");
  const [selected, setSelected] = useState<string[]>(initialValues?.selected || []);
  const [isPublic, setIsPublic] = useState(initialValues?.isPublic ?? true);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
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
    
    let userId;
    if (user.isAdmin) {
      userId = "admin";
    } else {
      userId = user.id; // Use the numeric ID for regular users
    }

    const newList = {
      id: initialValues?.id || Date.now().toString(),
      title,
      creator: user?.email || "anon",
      toolIds: selected,
      isPublic,
      userId,
    };
    onSubmit(newList);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <h2 className="text-2xl font-extrabold text-center text-primary mb-2">Create a List</h2>
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
      <div className="flex items-center gap-3">
        <label className="font-bold text-lg text-primary flex items-center gap-2">
          <input
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
            className="w-5 h-5 accent-blue-500"
          />
          Public
        </label>
        <span className="text-gray-500 text-sm">(If checked, your list will be visible to everyone)</span>
      </div>
      {error && <div className="mb-2 text-red-600 text-center font-semibold">{error}</div>}
      <div className="flex gap-4 justify-end">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl px-6 py-3 font-bold text-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className={`rounded-xl px-6 py-3 font-bold text-lg flex items-center justify-center gap-3 transition shadow-lg ${user ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'}`}
          disabled={!user}
          title={user ? '' : 'You must be logged in to create a list'}
        >
          <span className="text-2xl">💾</span> Save List
        </button>
      </div>
    </form>
  );
};

export default CreateListForm;