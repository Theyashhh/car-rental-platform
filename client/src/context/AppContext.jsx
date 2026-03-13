import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: false,
});

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [cars, setCars] = useState([]);
  const [showLogin, setShowLogin] = useState(false);

  // Attach token automatically
  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common["Authorization"];
    }
  }, [token]);

  // Load token on refresh
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const fetchUser = async () => {
    try {
      const { data } = await api.get("/api/user/data");
      if (data.success) {
        setUser(data.user);
        setIsOwner(data.user.role === "owner");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCars = async () => {
    try {
      const { data } = await api.get("/api/user/cars");
      if (data.success) setCars(data.cars);
    } catch (error) {
      toast.error("Failed to load cars");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsOwner(false);
    toast.success("Logged out");
    navigate("/");
  };

  const value = {
    api,
    token,
    setToken,
    user,
    setUser,
    isOwner,
    cars,
    fetchUser,
    fetchCars,
    logout,
    navigate,       
    showLogin,     
    setShowLogin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
