import { motion } from "framer-motion";
import { Bookmark, Building2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const dummyBusinesses = [
    {
        id: "1",
        name: "GreenTech Energy",
        category: "Renewable Energy",
        description:
            "A clean energy company focused on solar and wind power solutions for African homes and industries.",
        logo: "https://logo.clearbit.com/tesla.com",
    },
    {
        id: "2",
        name: "FarmLink Africa",
        category: "AgriTech",
        description:
            "Connecting local farmers directly to buyers and investors through digital tools.",
        logo: "https://logo.clearbit.com/jumia.com",
    },
    {
        id: "3",
        name: "SwiftPay",
        category: "FinTech",
        description:
            "Building cross-border payment solutions for small businesses and freelancers.",
        logo: "https://logo.clearbit.com/paypal.com",
    },
    {
        id: "4",
        name: "MedConnect",
        category: "HealthTech",
        description:
            "A telemedicine platform connecting patients to doctors across Africa.",
        logo: "https://logo.clearbit.com/ada.com",
    },
];

const SavedBusinesses = () => {
    const navigate = useNavigate();

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <Bookmark className="w-6 h-6 text-blue-700" />
                    Saved Businesses
                </h2>
                <p className="text-sm text-gray-500">
                    You've saved {dummyBusinesses.length} businesses
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {dummyBusinesses.map((biz) => (
                    <motion.div
                        key={biz.id}
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        onClick={() => navigate(`/investor/business/${biz.id}`)}
                        className="cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 overflow-hidden"
                    >
                        <div className="h-40 bg-gray-50 flex items-center justify-center">
                            <img
                                src={biz.logo}
                                alt={biz.name}
                                className="w-20 h-20 object-contain"
                            />
                        </div>

                        <div className="p-5">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-gray-800 truncate">
                                    {biz.name}
                                </h3>
                                <Building2 className="w-4 h-4 text-gray-400" />
                            </div>

                            <p className="text-sm text-blue-700 font-medium mb-2">
                                {biz.category}
                            </p>

                            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                                {biz.description}
                            </p>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/business/${biz.id}`);
                                }}
                                className="flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline"
                            >
                                View Details <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {dummyBusinesses.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                    <Bookmark className="w-10 h-10 mb-3 text-blue-700" />
                    <p className="font-medium">No saved businesses yet</p>
                    <p className="text-sm text-gray-400">
                        When you save a business, it will appear here.
                    </p>
                </div>
            )}
        </div>
    );
};

export default SavedBusinesses;