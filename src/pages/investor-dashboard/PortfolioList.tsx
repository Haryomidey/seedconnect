import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface PortfolioItem {
    id: number;
    company: string;
    sector: string;
    invested: string;
    returns: string;
}

const PortfolioList = ({ portfolio }: { portfolio: PortfolioItem[] }) => {
    return (
        <motion.div
            className="mt-12 bg-white border border-gray-200 rounded-2xl shadow-sm p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-700" />
                    My Portfolio
                </h2>
                <select className="border rounded-md px-3 py-1 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-700">
                    <option>All Investments</option>
                    <option>High ROI</option>
                    <option>Recent</option>
                </select>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-gray-700">
                    <thead>
                        <tr className="text-left border-b border-gray-200">
                            <th className="py-3 px-4">Company</th>
                            <th className="py-3 px-4">Sector</th>
                            <th className="py-3 px-4">Invested</th>
                            <th className="py-3 px-4">Returns</th>
                        </tr>
                    </thead>
                    <tbody>
                        {portfolio.map((item) => (
                            <tr
                                key={item.id}
                                className="border-b border-gray-100 hover:bg-gray-50 transition"
                            >
                                <td className="py-3 px-4 font-medium">{item.company}</td>
                                <td className="py-3 px-4">{item.sector}</td>
                                <td className="py-3 px-4">{item.invested}</td>
                                <td
                                    className={`py-3 px-4 font-semibold ${
                                        item.returns.startsWith("-") ? "text-red-600" : "text-green-600"
                                    }`}
                                >
                                    {item.returns}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default PortfolioList;