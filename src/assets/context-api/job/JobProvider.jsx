import { useContext, useState, useEffect } from 'react';
import { JobContext } from './JobContext';
import { UserContext } from '../user/UserContext';
import { API_BASE_URL } from "../../config/api";

export const JobProvider = ({ children }) => {
  const { token } = useContext(UserContext);
  const [jobs, setJobs] = useState([]);
  const [myJobs, setMyJobs] = useState([]);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all jobs
  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/jobs`);
      if (!res.ok) throw new Error('Failed to fetch jobs');
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a single job by ID
  const fetchJob = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/jobs/${id}`);
      if (!res.ok) throw new Error('Failed to fetch job');
      const data = await res.json();
      setJob(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create a new job (employer only)
  const createJob = async (jobData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(jobData),
      });
      if (!res.ok) throw new Error((await res.json()).error || 'Failed to create job');
      const data = await res.json();
      setJobs((prev) => [data, ...prev]);
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Update a job (employer only)
  const updateJob = async (id, jobData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/jobs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(jobData),
      });
      if (!res.ok) throw new Error((await res.json()).error || 'Failed to update job');
      const data = await res.json();
      setJobs((prev) => prev.map((j) => (j._id === id ? data : j)));
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Delete a job (employer only)
  const deleteJob = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/jobs/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error((await res.json()).error || 'Failed to delete job');
      setJobs((prev) => prev.filter((j) => j._id !== id));
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Fetch jobs posted by the current employer
  const fetchMyJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/jobs/employer/my`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error('Failed to fetch employer jobs');
      const data = await res.json();
      setMyJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // In JobProvider.jsx
  const searchJobs = async (keyword, location) => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (keyword) params.append('keyword', keyword);
      if (location) params.append('location', location);
      const res = await fetch(`${API_BASE_URL}/jobs?${params.toString()}`);
      if (!res.ok) throw new Error('Failed to search jobs');
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Optionally, fetch jobs on mount
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <JobContext.Provider
      value={{
        jobs,
        job,
        myJobs,
        loading,
        error,
        fetchJobs,
        fetchJob,
        createJob,
        updateJob,
        deleteJob,
        fetchMyJobs,
        searchJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
