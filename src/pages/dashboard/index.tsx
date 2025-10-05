import { motion } from "framer-motion";

const Dashboard = () => {
    return (
        <motion.div
            className="max-w-6xl mx-auto py-20 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h2 className="text-4xl font-bold text-primary mb-10">Your Dashboard</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
                {/* Left side: Entrepreneur’s businesses */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-4">Your Businesses</h3>
                    <ul className="space-y-3">
                        <li className="border-b pb-2">
                            <p className="font-semibold">Local Farm</p>
                            <p className="text-sm text-gray-600">Raised $1,000 of $3,000</p>
                        </li>
                        <li>
                            <p className="font-semibold">Clothing Shop</p>
                            <p className="text-sm text-gray-600">Raised $2,200 of $4,500</p>
                        </li>
                    </ul>
                    <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-secondary">
                        Add New Business
                    </button>
                </div>

                {/* Right side: Investor’s activity */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-4">Your Contributions</h3>
                    <ul className="space-y-3">
                        <li className="border-b pb-2">
                            <p className="font-semibold">Tech Repair</p>
                            <p className="text-sm text-gray-600">You donated $200</p>
                        </li>
                        <li>
                            <p className="font-semibold">Local Farm</p>
                            <p className="text-sm text-gray-600">You donated $150</p>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default Dashboard;