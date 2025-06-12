import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../assets/config/api";
import TopHeader from "../assets/component/home-component/TopHeader";
import MainHeader from "../assets/component/home-component/MainHeader";
import Footer from "../assets/component/home-component/Footer";

function FindEmployers() {
  const [employers, setEmployers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchEmployers() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API_BASE_URL}/users/employers`);
        if (!res.ok) throw new Error("Failed to fetch employers");
        const data = await res.json();
        setEmployers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchEmployers();
  }, []);

  const handleEmployerClick = (employerId) => {
    navigate(`/app/joblist?employer=${employerId}`);
  };

  return (
    <>
    <TopHeader />
    <MainHeader />
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">Find Employers</h1>
      {loading && <div className="text-center text-gray-500">Loading employers...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {employers.map((employer) => (
          <div
            key={employer._id || employer.id}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition border border-gray-100 flex flex-col items-center"
            onClick={() => handleEmployerClick(employer._id || employer.id)}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-blue-700">
              {employer.logo ? (
                <img src={employer.logo} alt={employer.company} className="w-14 h-14 object-cover rounded-full" />
              ) : (
                employer.company?.charAt(0) || "E"
              )}
            </div>
            <div className="text-lg font-semibold text-blue-900 mb-1 text-center">{employer.company}</div>
            <div className="text-gray-500 text-sm text-center">
              {employer.companyDetails
                ? employer.companyDetails.split(' ').slice(0, 10).join(' ') + (employer.companyDetails.split(' ').length > 10 ? '...' : '')
                : "Industry not specified"}
            </div>
            <div className="mt-2 text-blue-600 text-xs">View open jobs &rarr;</div>
          </div>
        ))}
      </div>
      {!loading && employers.length === 0 && !error && (
        <div className="text-center text-gray-400 mt-8">No employers found.</div>
      )}
    </div>
    <Footer />
    </>
  );
}

export default FindEmployers;