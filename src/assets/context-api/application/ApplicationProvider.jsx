import { useContext, useState } from 'react';
import { ApplicationContext } from './ApplicationContext';
import { UserContext } from '../user/UserContext';
import { API_BASE_URL } from '../../config/api';

export const ApplicationProvider = ({ children }) => {
  const { token } = useContext(UserContext);
  const [applications, setApplications] = useState([]); // For candidate or employer
  const [application, setApplication] = useState(null); // For single application
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allEmployerApplications, setAllEmployerApplications] = useState([]);

  // Candidate: Apply to a job
  const applyToJob = async ({ jobId, coverLetter, resume }) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/applications/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ jobId, coverLetter, resume }),
      });
      if (!res.ok) throw new Error((await res.json()).error || 'Failed to apply');
      const data = await res.json();
      setApplication(data);
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Candidate: Get my applications
  const fetchMyApplications = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/applications/my`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to fetch applications');
      const data = await res.json();
      setApplications(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Employer: Get applications for a job
  const fetchApplicationsForJob = async (jobId) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/applications/job/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to fetch job applications');
      const data = await res.json();
      setApplications(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Employer: Update application status
  const updateApplicationStatus = async (id, status) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/applications/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error((await res.json()).error || 'Failed to update status');
      const data = await res.json();
      // Optionally update local state
      setApplications((prev) => prev.map((a) => (a._id === id ? data : a)));
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const fetchAllEmployerApplications = async () => {
  setLoading(true);
  setError(null);
  try {
    const res = await fetch(`${API_BASE_URL}/applications/employer/all`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error('Failed to fetch applications');
    const data = await res.json();
    setApplications(data);
    setAllEmployerApplications(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        application,
        loading,
        error,
        allEmployerApplications,
        applyToJob,
        fetchMyApplications,
        fetchApplicationsForJob,
        updateApplicationStatus,
        fetchAllEmployerApplications,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
