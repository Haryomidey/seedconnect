import { useState } from "react";
import API from "../api/axios";
import { RegisterData, LoginData, User } from "../types/auth";

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    const register = async (formData: RegisterData) => {
        try {
            setLoading(true);
            setError(null);

            const res = await API.post("/auth/signup", formData);
            const { data, token } = res.data;

            if (token) localStorage.setItem("token", token);
            setUser(data);

            return data;
        } catch (err: any) {
            const message = err.response?.data?.message || "Registration failed";
            setError(message);
            throw new Error(message);
        } finally {
            setLoading(false);
        }
    };

    const login = async (formData: LoginData) => {
        try {
            setLoading(true);
            setError(null);

            const res = await API.post("/auth/login", formData);
            const { data, token } = res.data;

            if (token) localStorage.setItem("token", token);
            setUser(data);

            return data;
        } catch (err: any) {
            const message = err.response?.data?.message || "Login failed";
            setError(message);
            throw new Error(message);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    const authenticated = () => {
        return !!user;    
    };

    return {
        user,
        loading,
        error,
        register,
        login,
        logout,
        authenticated,
    };
};