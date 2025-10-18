import { motion } from "framer-motion";
import {
    TrendingUp,
    Building2,
    DollarSign,
    PieChart,
} from "lucide-react";
import DashboardHeader from "./InvestorDashboardHeader";
import StatsCards from "./InvestorStatsCard";
import FundingChart from "./InvestorFundingChart";
import PortfolioList from "./PortfolioList";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const InvestorDashboard = () => {
    const stats = [
        { title: "Total Invested", value: "$120,000", icon: <DollarSign className="w-6 h-6 text-blue-700" /> },
        { title: "Companies Invested", value: "14", icon: <Building2 className="w-6 h-6 text-blue-700" /> },
        { title: "Average ROI", value: "18%", icon: <PieChart className="w-6 h-6 text-blue-700" /> },
        { title: "Portfolio Growth", value: "+12%", icon: <TrendingUp className="w-6 h-6 text-blue-700" /> },
    ];

    const chartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "Portfolio Value ($)",
                data: [20000, 30000, 50000, 65000, 80000, 100000, 120000],
                borderColor: "#1D4ED8",
                backgroundColor: "rgba(29,78,216,0.1)",
                borderWidth: 3,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: "#1D4ED8",
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false } },
            y: {
                grid: { color: "#E5E7EB" },
                ticks: { callback: (value: any) => `$${value / 1000}k` },
            },
        },
    };

    const portfolio = [
        {
            id: 1,
            company: "TechNova",
            sector: "AI & Robotics",
            invested: "$25,000",
            returns: "+15%",
        },
        {
            id: 2,
            company: "EcoWave",
            sector: "Clean Energy",
            invested: "$18,000",
            returns: "+22%",
        },
        {
            id: 3,
            company: "FinNext",
            sector: "FinTech",
            invested: "$30,000",
            returns: "+11%",
        },
    ];

    const recentActivities = [
        { id: 1, title: "Dividend Received from TechNova", amount: "$500", time: "2 hours ago" },
        { id: 2, title: "New Investment in EcoWave", amount: "$10,000", time: "1 day ago" },
        { id: 3, title: "Portfolio Growth Reached +12%", time: "3 days ago" },
    ];

    return (
        <motion.div className="p-8 max-w-7xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <DashboardHeader />
            <StatsCards stats={stats} />
            <FundingChart chartData={chartData} chartOptions={chartOptions} recentActivities={recentActivities} />
            <PortfolioList portfolio={portfolio} />
        </motion.div>
    );
};

export default InvestorDashboard;