import { motion } from "framer-motion";

interface Stat {
    title: string;
    value: string;
    icon: React.ReactNode;
}

const InvestorStatsCards = ({ stats }: { stats: Stat[] }) => {
    return (
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
    );
};

export default InvestorStatsCards;