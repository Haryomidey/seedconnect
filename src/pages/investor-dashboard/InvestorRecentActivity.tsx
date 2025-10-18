import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, DollarSign, Building2 } from "lucide-react";

export interface InvestorActivity {
    id: number;
    title: string;
    amount?: string | null;
    time: string;
    type?: "gain" | "loss" | "investment" | "dividend";
}

const InvestorRecentActivity = ({ recentActivities }: { recentActivities: InvestorActivity[] }) => {
    return (
        <motion.ul
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            {recentActivities.map((activity) => {
                const icon =
                    activity.type === "gain" ? (
                        <ArrowUpRight className="w-5 h-5 text-green-600" />
                    ) : activity.type === "loss" ? (
                        <ArrowDownRight className="w-5 h-5 text-red-600" />
                    ) : activity.type === "dividend" ? (
                        <DollarSign className="w-5 h-5 text-blue-600" />
                    ) : (
                        <Building2 className="w-5 h-5 text-gray-600" />
                    );

                return (
                    <li
                        key={activity.id}
                        className="flex items-start justify-between border-b border-gray-100 pb-4"
                    >
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg">{icon}</div>
                            <div>
                                <h3 className="font-medium text-gray-800">{activity.title}</h3>
                                {activity.amount && (
                                    <p className="text-sm text-gray-500">{activity.amount}</p>
                                )}
                                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                            </div>
                        </div>
                    </li>
                );
            })}
        </motion.ul>
    );
};

export default InvestorRecentActivity;