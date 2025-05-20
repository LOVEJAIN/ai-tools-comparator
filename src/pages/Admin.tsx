import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "@/contexts/DataContext";
import { mockTraffic } from "@/data/mockData";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend
} from 'recharts';

const Admin: React.FC = () => {
  const { user, analytics, items } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate("/");
    }
  }, [user, navigate]);

  // Summary metrics
  const totalClicks = analytics.reduce((acc, curr) => acc + curr.clicks, 0);
  const totalRevenue = analytics.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalRatings = analytics.reduce((acc, curr) => acc + curr.numRaters, 0);
  const avgSiteRating = totalRatings > 0 ? (analytics.reduce((acc, curr) => acc + (curr.avgRating * curr.numRaters), 0) / totalRatings) : 0;
  const totalTools = analytics.length;

  // Top tools
  const topByClicks = [...analytics].sort((a, b) => b.clicks - a.clicks).slice(0, 5);
  const topByRating = [...analytics].filter(a => a.numRaters > 2).sort((a, b) => b.avgRating - a.avgRating).slice(0, 5);

  return (
    <div className="max-w-5xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg border">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-6 shadow flex flex-col items-center">
          <div className="text-lg font-semibold mb-1">Total Clicks</div>
          <div className="text-3xl font-bold">{totalClicks}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow flex flex-col items-center">
          <div className="text-lg font-semibold mb-1">Total Revenue</div>
          <div className="text-3xl font-bold">₹{totalRevenue.toFixed(2)}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow flex flex-col items-center">
          <div className="text-lg font-semibold mb-1">Average Site Rating</div>
          <div className="text-3xl font-bold">{avgSiteRating.toFixed(2)}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow flex flex-col items-center">
          <div className="text-lg font-semibold mb-1">Total Ratings</div>
          <div className="text-3xl font-bold">{totalRatings}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow flex flex-col items-center">
          <div className="text-lg font-semibold mb-1">Total Tools</div>
          <div className="text-3xl font-bold">{totalTools}</div>
        </div>
      </div>
      {/* Traffic Chart */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Website Traffic (Last 7 Days)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockTraffic} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="visits" stroke="#8884d8" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* Top Tools by Clicks */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Top Tools by Clicks</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={topByClicks} layout="vertical" margin={{ left: 40, right: 20, top: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="itemTitle" type="category" width={150} />
            <Tooltip />
            <Legend />
            <Bar dataKey="clicks" fill="#82ca9d" name="Clicks" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Top Tools by Rating */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Top Tools by Average Rating</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={topByRating} layout="vertical" margin={{ left: 40, right: 20, top: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 5]} />
            <YAxis dataKey="itemTitle" type="category" width={150} />
            <Tooltip />
            <Legend />
            <Bar dataKey="avgRating" fill="#8884d8" name="Avg. Rating" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Table: Clicks, Revenue, Ratings */}
      <h2 className="text-xl font-semibold mb-4">Clicks by Tool</h2>
      <table className="w-full border text-sm mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Tool</th>
            <th className="p-2 border">Clicks</th>
            <th className="p-2 border">Revenue (INR)</th>
            <th className="p-2 border">Avg. Rating</th>
            <th className="p-2 border"># of Raters</th>
          </tr>
        </thead>
        <tbody>
          {analytics.map((row) => (
            <tr key={row.itemId}>
              <td className="p-2 border">{row.itemTitle}</td>
              <td className="p-2 border text-center">{row.clicks}</td>
              <td className="p-2 border text-center">₹{row.clicks * 1}</td>
              <td className="p-2 border text-center">{row.avgRating?.toFixed(2) ?? '-'}</td>
              <td className="p-2 border text-center">{row.numRaters ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-xs text-muted-foreground mt-8">Revenue is a forecast based on total clicks. Actual revenue may vary.</div>
    </div>
  );
};

export default Admin; 