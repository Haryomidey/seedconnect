import { motion } from "framer-motion"
import {
    TrendingUp,
    Target,
    Users,
    DollarSign,
    Settings,
    PlusCircle,
    BarChart3,
    Bell,
} from "lucide-react"
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const BusinessDashboard = () => {
    const stats = [
        {
            title: "Total Raised",
            value: "$45,200",
            icon: <DollarSign className="w-6 h-6 text-blue-700" />,
        },
        {
            title: "Funding Goal",
            value: "$80,000",
            icon: <Target className="w-6 h-6 text-blue-700" />,
        },
        {
            title: "Investors",
            value: "128",
            icon: <Users className="w-6 h-6 text-blue-700" />,
        },
        {
            title: "Growth Rate",
            value: "+23%",
            icon: <TrendingUp className="w-6 h-6 text-blue-700" />,
        },
    ]

    const recentActivities = [
        {
            id: 1,
            title: "New Investment Received",
            amount: "$3,000",
            time: "2 hours ago",
        },
        {
            id: 2,
            title: "Investor Followed Your Business",
            amount: null,
            time: "5 hours ago",
        },
        {
            id: 3,
            title: "Funding Milestone Reached",
            amount: "$25,000 raised",
            time: "1 day ago",
        },
    ]

    const chartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "Funding Progress ($)",
                data: [5000, 10000, 20000, 25000, 32000, 40000, 45200],
                borderColor: "#1D4ED8", // blue-700
                backgroundColor: "rgba(29, 78, 216, 0.1)",
                borderWidth: 3,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: "#1D4ED8",
            },
        ],
    }

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: "#1E3A8A",
                titleColor: "#fff",
                bodyColor: "#fff",
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    color: "#E5E7EB",
                },
                ticks: {
                    callback: (value: any) => `$${value / 1000}k`,
                },
            },
        },
    }

    return (
        <motion.div
            className="p-8 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-blue-700 mb-2">
                        Business Dashboard
                    </h1>
                    <p className="text-gray-600">
                        Manage your business growth, track investments, and analyze performance.
                    </p>
                </div>
                <div className="flex items-center gap-3 mt-4 sm:mt-0">
                    <button className="flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
                        <PlusCircle className="w-5 h-5" /> Add Update
                    </button>
                    <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition">
                        <Bell className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition">
                        <Settings className="w-5 h-5 text-gray-700" />
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex items-center justify-between"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div>
                            <p className="text-sm text-gray-500">{stat.title}</p>
                            <h2 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h2>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">{stat.icon}</div>
                    </motion.div>
                ))}
            </div>

            {/* Charts + Activity */}
            <div className="grid lg:grid-cols-3 gap-10">
                {/* Chart */}
                <motion.div
                    className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-sm p-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-blue-700" />
                            Funding Performance
                        </h2>
                        <select className="border rounded-md px-3 py-1 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-700">
                            <option>Last 7 months</option>
                            <option>Last 12 months</option>
                            <option>All time</option>
                        </select>
                    </div>

                    <Line data={chartData} options={chartOptions} />
                </motion.div>

                {/* Recent Activity */}
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

                    <ul className="space-y-5">
                        {recentActivities.map((activity) => (
                            <li
                                key={activity.id}
                                className="border-b border-gray-100 pb-4 flex justify-between items-start"
                            >
                                <div>
                                    <p className="font-medium text-gray-800">{activity.title}</p>
                                    {activity.amount && (
                                        <p className="text-blue-700 font-semibold text-sm">
                                            {activity.amount}
                                        </p>
                                    )}
                                    <p className="text-sm text-gray-500">{activity.time}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default BusinessDashboard