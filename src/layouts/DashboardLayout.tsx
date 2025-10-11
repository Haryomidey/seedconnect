import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, LogOut } from "lucide-react";
import logo from "../assets/logo.png";

const getUser = () => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : { name: "User", role: "business" }; 
};

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [user, setUser] = useState<{ name: string; role: string }>({ name: "", role: "" });
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = getUser();
        setUser(currentUser);
    }, []);

    const businessMenu = [
        { path: "/business/dashboard", label: "Dashboard" },
        { path: "/business/messages", label: "Messages" },
        { path: "/business/profile", label: "Profile" },
    ];

    const investorMenu = [
        { path: "/investor/dashboard", label: "Dashboard" },
        { path: "/investor/explore", label: "Explore" },
        { path: "/investor/saved", label: "Saved Businesses" },
        { path: "/investor/messages", label: "Messages" },
        { path: "/investor/profile", label: "Profile" },
    ];

    const menuItems = user.role === "investor" ? investorMenu : businessMenu;

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="min-h-screen flex bg-gray-50">
            <aside
                className={`fixed md:static inset-y-0 left-0 w-64 bg-white border-r border-[#d9d9d9] z-20 transform transition-transform duration-300 
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                <div className="flex items-center justify-between p-6 border-b border-[#d9d9d9] h-[70px]">
                    <div className="flex items-center justify-center gap-3">
                        <img src={logo} alt="SeedConnect" className="h-[40px]" />
                    </div>
                    <button
                        className="md:hidden text-gray-600"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav className="p-6 space-y-2">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-lg font-medium transition-colors ${
                                    isActive
                                        ? "bg-blue-600 text-white"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="p-6 border-t border-[#d9d9d9]">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-gray-600 hover:text-red-500 font-medium"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </aside>

            <div className="flex-1 flex flex-col">
                <header className="flex items-center justify-between bg-white shadow px-6 py-4 h-[70px]">
                    <button
                        className="md:hidden text-gray-600"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                    <h1 className="text-lg font-semibold text-gray-800">
                        {user.role === "investor"
                            ? "Investor Dashboard"
                            : "Business Dashboard"}
                    </h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">
                            Hello, {user.name || "User"}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                            {user.name?.[0]?.toUpperCase() || "U"}
                        </div>
                    </div>
                </header>

                <main className="flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;