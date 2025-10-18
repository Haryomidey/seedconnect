import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Business } from "../data/businesses";

interface BusinessCardProps {
    business: Business;
    place?: 'home' | 'not-home'
}

const BusinessCard = ({ business, place='not-home' }: BusinessCardProps) => {
    const navigate = useNavigate();
    const fallbackImage = "https://via.placeholder.com/150?text=No+Image";
    const progress =
        (business.amountRaised / business.targetAmount) * 100 || 0;

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => {
                place === 'home' ? navigate(`/business/${business.id}`) : navigate(`/investor/business/${business.id}`);
            }}
            className="cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 overflow-hidden"
        >
            <div className="h-40 bg-gray-50 flex items-center justify-center">
                <img
                    src={business.image || fallbackImage}
                    alt={business.name}
                    className="w-20 h-20 object-contain"
                />
            </div>

            <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800 truncate">
                        {business.name}
                    </h3>
                </div>

                <p className="text-sm text-blue-700 font-medium mb-2">
                    {business.industry}
                </p>

                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {business.shortDescription}
                </p>

                <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Raised: ${business.amountRaised.toLocaleString()}</span>
                        <span>Goal: ${business.targetAmount.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div
                            className="bg-blue-700 h-2 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        place === 'home' ? navigate(`/business/${business.id}`) : navigate(`/investor/business/${business.id}`);
                    }}
                    className="flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline"
                >
                    View Details <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </motion.div>
    );
};

export default BusinessCard;