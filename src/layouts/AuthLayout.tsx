import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo-white.png";
import AuthImage from "../assets/auth-white.png";
import ScrollToTop from "../components/ScrollToTop";

const AuthLayout = () => {
    return (
        <div className="h-screen flex flex-col md:flex-row overflow-y-hidden">
            <ScrollToTop />
            <div className="hidden md:flex flex-col justify-between w-1/2 bg-blue-600 text-white p-12 relative">
                <div>
                    <div className="">
                        <img src={logo} alt="SeedConnect" className="h-[40px]" />
                    </div>
                    <h1 className="text-3xl font-bold">Welcome to SeedConnect</h1>
                    <p className="mt-3 text-blue-100 text-lg">
                        Empowering entrepreneurs and investors to grow together.
                    </p>
                    <div>
                        <img src={AuthImage} alt="" className="max-w-[80%]" />
                    </div>
                </div>
                <p className="text-sm text-blue-200">&copy; {new Date().getFullYear()} SeedConnect</p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 flex items-center justify-center bg-gray-50 p-"
            >
                <div className="w-full max-w-md overflow-y-scroll h-full scrollbar-none">
                    <Outlet />
                </div>
            </motion.div>
        </div>
    );
};

export default AuthLayout;