import { motion } from "framer-motion"
import {
    TrendingUp,
    Target,
    Users,
    DollarSign,
} from "lucide-react"
import DashboardHeader from "./DashboardHeader"
import StatsCards from "./StatsCards"
import FundingChart from "./FundingChart"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const BusinessDashboard = () => {
    const stats = [
        { title: "Total Raised", value: "$45,200", icon: <DollarSign className="w-6 h-6 text-blue-700" /> },
        { title: "Funding Goal", value: "$80,000", icon: <Target className="w-6 h-6 text-blue-700" /> },
        { title: "Investors", value: "128", icon: <Users className="w-6 h-6 text-blue-700" /> },
        { title: "Growth Rate", value: "+23%", icon: <TrendingUp className="w-6 h-6 text-blue-700" /> },
    ]

    const recentActivities = [
        { id: 1, title: "New Investment Received", amount: "$3,000", time: "2 hours ago" },
        { id: 2, title: "Investor Followed Your Business", time: "5 hours ago" },
        { id: 3, title: "Funding Milestone Reached", amount: "$25,000 raised", time: "1 day ago" },
    ]

    const chartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "Funding Progress ($)",
                data: [5000, 10000, 20000, 25000, 32000, 40000, 45200],
                borderColor: "#1D4ED8",
                backgroundColor: "rgba(29,78,216,0.1)",
                borderWidth: 3,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: "#1D4ED8",
            },
        ],
    }

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
    }

    return (
        <motion.div className="p-8 max-w-7xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <DashboardHeader />
            <StatsCards stats={stats} />
            <FundingChart chartData={chartData} chartOptions={chartOptions} recentActivities={recentActivities} />
        </motion.div>
    )
}

export default BusinessDashboard;