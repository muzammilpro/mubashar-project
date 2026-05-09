"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import api from "@/lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const hydrateFromStorage = useCallback(() => {
    try {
      const raw = localStorage.getItem("md_user");
      const token = localStorage.getItem("md_token");
      if (raw && token) setUser(JSON.parse(raw));
    } catch {
      /* ignore */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    hydrateFromStorage();
    const onLogout = () => { setUser(null); setLoading(false); };
    window.addEventListener("auth:logout", onLogout);
    return () => window.removeEventListener("auth:logout", onLogout);
  }, [hydrateFromStorage]);

  const login = useCallback(async (username, password) => {
    const { data } = await api.post("/auth/login", { username, password });
    const { token, user: u } = data.data;
    localStorage.setItem("md_token", token);
    localStorage.setItem("md_user", JSON.stringify(u));
    setUser(u);
    return u;
  }, []);

  const register = useCallback(async (username, password) => {
    const { data } = await api.post("/auth/register", { username, password });
    const { token, user: u } = data.data;
    localStorage.setItem("md_token", token);
    localStorage.setItem("md_user", JSON.stringify(u));
    setUser(u);
    return u;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("md_token");
    localStorage.removeItem("md_user");
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
