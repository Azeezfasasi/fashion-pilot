import { useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import { API_BASE_URL } from "../../config/api";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  // const [loading, setLoading] = useState(false);
  const [loading, setLoading] = useState(!!token);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  useEffect(() => {
    if (token) getProfile();
  }, [token]);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(`${API_BASE_URL}/users/login`, {
        email,
        password,
      });
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      return true;
    } catch (err) {
      setError(
        axios.isAxiosError(err)
          ? err.response?.data?.error || "Login failed"
          : "Login failed"
      );
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  const register = async (data) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post(`${API_BASE_URL}/users/register`, data);
      return true;
    } catch (err) {
      setError(
        axios.isAxiosError(err)
          ? err.response?.data?.error || "Registration failed"
          : "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  const getProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_BASE_URL}/users/me`);
      setUser(res.data);
    } catch (err) {
      setError(
        axios.isAxiosError(err)
          ? err.response?.data?.error || "Failed to fetch profile"
          : "Failed to fetch profile"
      );
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.put(`${API_BASE_URL}/users/me`, updates);
      setUser(res.data);
      return true;
    } catch (err) {
      setError(
        axios.isAxiosError(err)
          ? err.response?.data?.error || "Failed to update profile"
          : "Failed to update profile"
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Function to add favorite
    const addFavorite = async (jobId) => {
      await fetch(`${API_BASE_URL}/users/favorites/${jobId}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      });
    };
  
    //  function to remove favorite
    const removeFavorite = async (jobId) => {
      await fetch(`${API_BASE_URL}/users/favorites/${jobId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
    };
  
    //  function to fetch all favorite
    const fetchFavorites = async () => {
      const res = await fetch(`${API_BASE_URL}/users/favorites`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return res.json();
    };

  const isAdmin = user?.role === "admin";
  const isCandidate = user?.role === "candidate";
  const isEmployer = user?.role === "employer";

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        login,
        register,
        logout,
        getProfile,
        updateProfile,
        isAdmin,
        isCandidate,
        isEmployer,
        addFavorite,
        removeFavorite,
        fetchFavorites,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
