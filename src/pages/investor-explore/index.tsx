import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    MapPin,
    Target,
    DollarSign,
} from "lucide-react";
import { businesses } from "../../data/businesses";

import Dummy from '../../assets/dummy.png';


const InvestorExplore = () => {
    const navigate = useNavigate();

    const openBusiness = (id: string) => {
        navigate(`/investor/business/${id}`);
    };

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <motion.div
                className="mb-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-4xl font-bold text-blue-700 mb-3">
                    Explore Investment Opportunities
                </h1>
                <p className="text-gray-600 text-lg">
                    Discover innovative startups shaping Africa's future.
                </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {businesses.map((business, index) => {
                    const progress =
                        (business.amountRaised / business.targetAmount) * 100;

                    return (
                        <motion.div
                            key={business.id}
                            onClick={() => openBusiness(business.id)}
                            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {business.image && (
                                <img
                                    src={Dummy}
                                    alt={business.name}
                                    className="w-full h-48 object-cover"
                                />
                            )}

                            <div className="p-6 flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h2 className="text-xl font-semibold text-gray-800">
                                            {business.name}
                                        </h2>
                                        <span className="text-sm text-gray-500">
                                            {business.industry}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-3">
                                        {business.shortDescription}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                        <MapPin className="w-4 h-4 text-gray-400" />
                                        <span>{business.location}</span>
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                                            <span>
                                                <DollarSign className="w-4 h-4 inline text-blue-700 mr-1" />
                                                ${business.amountRaised.toLocaleString()}
                                            </span>
                                            <span>
                                                <Target className="w-4 h-4 inline text-gray-400 mr-1" />
                                                ${business.targetAmount.toLocaleString()}
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-2">
                                            <div
                                                className="bg-blue-700 h-2 rounded-full"
                                                style={{ width: `${progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default InvestorExplore;