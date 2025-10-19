import { motion } from "framer-motion";
import { Search, Briefcase, Leaf, Shirt, Wrench, Building2 } from "lucide-react";
import BusinessCard from "../../components/BusinessCard";
import CallToAction from "../../components/CallToAction";
import { businesses } from "../../data/businesses";

const Explore = () => {

    const categories = [
        { icon: <Leaf className="w-6 h-6 text-blue-600" />, name: "Agriculture" },
        { icon: <Shirt className="w-6 h-6 text-blue-600" />, name: "Fashion" },
        { icon: <Wrench className="w-6 h-6 text-blue-600" />, name: "Technology" },
        { icon: <Briefcase className="w-6 h-6 text-blue-600" />, name: "Services" },
        { icon: <Building2 className="w-6 h-6 text-blue-600" />, name: "Real Estate" },
    ];

    return (
        <div className="bg-white text-gray-900">
            <section className="bg-gray-50 py-20 px-6 text-center flex items-center min-h-[500px]">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Explore <span className="text-blue-700">Promising Businesses</span>
                    </h1>
                    <p className="text-gray-600 text-lg mb-8">
                        Discover startups, small businesses, and entrepreneurs shaping the future.
                    </p>

                    <div className="max-w-xl mx-auto relative bg-white">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for businesses, categories, or founders..."
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
                        />
                    </div>
                </motion.div>
            </section>

            <section className="max-w-7xl mx-auto py-20 px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Browse by <span className="text-blue-700">Category</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-200 hover:shadow-md rounded-xl p-6 w-full text-center cursor-pointer transition"
                        >
                            <div className="flex justify-center mb-3">{cat.icon}</div>
                            <p className="font-medium text-gray-800">{cat.name}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Featured <span className="text-blue-700">Businesses</span>
                </h2>
                <div className="grid gap-10 md:grid-cols-3">
                    {businesses.map((business, idx) => (
                        <motion.div
                            key={business.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <BusinessCard business={business} />
                        </motion.div>
                    ))}
                </div>
            </section>

            <CallToAction />
        </div>
    );
};

export default Explore;