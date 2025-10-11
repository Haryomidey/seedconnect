import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <header className="shadow-sm bg-white">
            <nav className="max-w-7xl mx-auto h-24 flex justify-between items-center px-6">
                <Link
                    to="/"
                    className="text-2xl font-extrabold tracking-tight text-primary hover:text-secondary transition-colors"
                >
                    <div className="flex items-center justify-center gap-3">
                        <img src={logo} alt="SeedConnect" className="h-[40px]" />
                    </div>
                </Link>

                <div className="flex items-center space-x-8 text-lg font-medium">
                    <Link
                        to="/explore"
                        className="text-gray-700 hover:text-secondary transition-colors"
                    >
                        Explore
                    </Link>
                    <Link
                        to="/login"
                        className="text-gray-700 hover:text-secondary transition-colors"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="inline-flex items-center justify-center h-10 px-5 hover:bg-primary rounded-full text-white font-semibold shadow bg-secondary transition"
                    >
                        Sign Up
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;