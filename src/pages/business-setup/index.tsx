import { motion } from "framer-motion";

const BusinessSetup = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-blue-50 px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-8"
            >
                <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
                    Complete Your Business Profile
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Add your business information to start raising funds.
                </p>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Business Description</label>
                        <textarea className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" rows={4}></textarea>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                        Save & Continue
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default BusinessSetup;