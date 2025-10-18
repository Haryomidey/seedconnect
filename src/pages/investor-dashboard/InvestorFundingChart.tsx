import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { TrendingUp, Bell } from "lucide-react";
import InvestorRecentActivity from "./InvestorRecentActivity";

interface Activity {
    id: number;
    title: string;
    amount?: string | null;
    time: string;
}

const InvestorFundingChart = ({
    chartData,
    chartOptions,
    recentActivities,
}: {
    chartData: any;
    chartOptions: any;
    recentActivities: Activity[];
}) => {
    return (
        <div className="grid lg:grid-cols-3 gap-10">
            <motion.div
                className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-sm p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-700" />
                        Portfolio Growth
                    </h2>
                    <select className="border rounded-md px-3 py-1 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-700">
                        <option>Last 7 months</option>
                        <option>Last 12 months</option>
                        <option>All time</option>
                    </select>
                </div>
                <Line data={chartData} options={chartOptions} />
            </motion.div>

            <motion.div
                className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-blue-700" />
                    Recent Activity
                </h2>

                <InvestorRecentActivity recentActivities={recentActivities} />
            </motion.div>
        </div>
    );
};

export default InvestorFundingChart;