import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "@/contexts/DataContext";

interface AdminProps {
  totalClicks: number;
  totalSubmissions: number;
}

const Admin: React.FC<AdminProps> = ({ totalClicks, totalSubmissions }) => {
  const { user } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg border">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="mb-4">
        <span className="font-semibold">Total Tool Clicks:</span> {totalClicks}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Total Tool Submissions:</span> {totalSubmissions}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Estimated Revenue:</span> ₹{totalClicks}
      </div>
      <div className="text-xs text-muted-foreground mt-8">(1 click = 1 INR)</div>
    </div>
  );
};

export default Admin; 