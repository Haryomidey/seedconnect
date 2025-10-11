import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Password reset email sent to:", email);
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
                    Forgot Password?
                </h1>
                <p className="text-center text-gray-500 mb-6">
                    Enter your email address and we'll send you a link to reset your password.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition"
                    >
                        Send Reset Link
                    </motion.button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Remember your password?{" "}
                    <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                        Go back to Login
                    </Link>
                </p>
            </motion.div>
        </section>
    );
};

export default ForgotPassword;