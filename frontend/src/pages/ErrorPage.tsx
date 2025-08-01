import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-red-600">Oops!</h1>
        <p className="text-xl text-gray-600 mb-6">Something went wrong, please try again after sometime</p>
        <div className="flex justify-center">
          <button onClick={() => navigate("/")} className="bg-blue-600 text-white rounded px-6 py-2 font-bold text-lg hover:bg-blue-700 transition focus:outline-none focus:ring-0">← Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage; 