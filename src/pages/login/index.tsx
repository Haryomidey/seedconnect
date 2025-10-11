import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [role, setRole] = useState<"business" | "investor">("business");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login data:", { ...formData, role });
    };

    return (
        <section className="flex items-center justify-center min-h-screen px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8"
            >
                <h1 className="text-3xl font-bold text-blue-600 text-center mb-2">
                    Welcome Back
                </h1>
                <p className="text-center text-gray-500 mb-6">
                    Log in to your {role === "business" ? "Business" : "Investor"} account
                </p>

                <div className="flex justify-center mb-8">
                    <div className="bg-gray-100 p-1 rounded-xl flex">
                        <button
                            type="button"
                            onClick={() => setRole("business")}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                                role === "business"
                                    ? "bg-blue-600 text-white shadow"
                                    : "text-gray-600 hover:text-blue-600"
                            }`}
                        >
                            Business
                        </button>
                        <button
                            type="button"
                            onClick={() => setRole("investor")}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                                role === "investor"
                                    ? "bg-blue-600 text-white shadow"
                                    : "text-gray-600 hover:text-blue-600"
                            }`}
                        >
                            Investor
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="********"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={formData.remember}
                                onChange={handleChange}
                                className="accent-blue-600"
                            />
                            Remember me
                        </label>
                        <Link to="/forgot-password" className="text-blue-600 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition"
                    >
                        Log In
                    </motion.button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </motion.div>
        </section>
    );
};

export default Login;