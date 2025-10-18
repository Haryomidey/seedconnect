import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    MapPin,
    Target,
    DollarSign,
} from "lucide-react";
import { businesses } from "../../data/businesses";

import Dummy from '../../assets/dummy.png';
import BusinessCard from "../../components/BusinessCard";


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
                {businesses.map((business, index) => (
                    <BusinessCard business={business} key={index} />
                ))}
            </div>
        </div>
    );
};

export default InvestorExplore;