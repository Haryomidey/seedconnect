import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const BusinessDetail = () => {
    const { id } = useParams(); // later you can fetch real data by ID

    return (
        <motion.div
            className="max-w-4xl mx-auto py-20 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h2 className="text-4xl font-bold text-primary mb-6">Business #{id}</h2>
            <p className="mb-4 text-gray-700">
                This is a detailed story about the business. It describes the entrepreneur’s
                vision, challenges, and how funding will help.
            </p>
            <div className="flex justify-between mb-6">
                <span className="font-semibold text-gray-800">Funding Goal: $5,000</span>
                <span className="font-semibold text-gray-800">Raised: $1,200</span>
            </div>
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary">
                Support This Business
            </button>
        </motion.div>
    );
};

export default BusinessDetail;