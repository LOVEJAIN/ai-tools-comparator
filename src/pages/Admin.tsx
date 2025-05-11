import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "@/contexts/DataContext";

const Admin: React.FC = () => {
  const { user, analytics, items } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate("/");
    }
  }, [user, navigate]);

  // Calculate total clicks and revenue
  const totalClicks = analytics.reduce((acc, curr) => acc + curr.clicks, 0);
  const totalRevenue = totalClicks * 1; // 1 INR per click

  return (
    <div className="max-w-3xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg border">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="mb-4">
        <span className="font-semibold">Total Tool Clicks:</span> {totalClicks}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Revenue Forecast:</span> ₹{totalRevenue}
      </div>
      <div className="mb-8">
        <span className="font-semibold">(1 click = 1 INR)</span>
      </div>
      <h2 className="text-xl font-semibold mb-4">Clicks by Tool</h2>
      <table className="w-full border text-sm mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Tool</th>
            <th className="p-2 border">Clicks</th>
            <th className="p-2 border">Revenue (INR)</th>
          </tr>
        </thead>
        <tbody>
          {analytics.map((row) => (
            <tr key={row.itemId}>
              <td className="p-2 border">{row.itemTitle}</td>
              <td className="p-2 border text-center">{row.clicks}</td>
              <td className="p-2 border text-center">₹{row.clicks * 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-xs text-muted-foreground mt-8">Revenue is a forecast based on total clicks. Actual revenue may vary.</div>
    </div>
  );
};

export default Admin; 