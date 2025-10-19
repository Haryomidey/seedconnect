import { Bell, Settings } from "lucide-react";

const InvestorDashboardHeader = () => {

    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
            <div>
                <h1 className="text-4xl font-bold text-blue-700 mb-2">
                    Dashboard
                </h1>
                <p className="text-gray-600">
                    Track your investments, monitor company performance, and discover new opportunities.
                </p>
            </div>

            <div className="flex items-center gap-3 mt-4 sm:mt-0">
                <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition">
                    <Bell className="w-5 h-5 text-gray-700" />
                </button>
                <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition">
                    <Settings className="w-5 h-5 text-gray-700" />
                </button>
            </div>
        </div>
    );
};

export default InvestorDashboardHeader;