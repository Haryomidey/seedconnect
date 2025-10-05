import { motion } from "framer-motion";
import { Search, Briefcase, Leaf, Shirt, Wrench, Building2 } from "lucide-react";
import BusinessCard from "../../components/BusinessCard";
import CallToAction from "../../components/CallToAction";

const Explore = () => {
    const businesses = [
        {
            id: 1,
            title: "Green Valley Farms",
            description: "Supplying fresh organic produce to the local market.",
            fundingGoal: "$3,000",
            raised: "$1,000",
        },
        {
            id: 2,
            title: "Urban Threads",
            description: "Affordable and eco-friendly fashion for young people.",
            fundingGoal: "$4,500",
            raised: "$2,200",
        },
        {
            id: 3,
            title: "TechFix Hub",
            description: "Helping the community repair and recycle electronics.",
            fundingGoal: "$2,500",
            raised: "$800",
        },
        {
            id: 4,
            title: "SmartEnergy Co.",
            description: "Bringing renewable energy solutions to rural homes.",
            fundingGoal: "$6,000",
            raised: "$3,400",
        },
        {
            id: 5,
            title: "CraftHouse",
            description: "Handmade crafts and jewelry from local artisans.",
            fundingGoal: "$2,000",
            raised: "$1,100",
        },
        {
            id: 6,
            title: "FixPro Services",
            description: "Reliable home and office repair services.",
            fundingGoal: "$3,500",
            raised: "$1,500",
        },
    ];

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
                    {businesses.map((biz, idx) => (
                        <motion.div
                            key={biz.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <BusinessCard
                                title={biz.title}
                                description={biz.description}
                                fundingGoal={biz.fundingGoal}
                                raised={biz.raised}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-4"
                    >
                        Ready to <span className="text-blue-700">Join the Movement?</span>
                    </motion.h3>
                    <p className="text-gray-600 mb-8">
                        Whether you're looking to invest or seeking funding, SeedConnect helps you take the next big step.
                    </p>
                    <a
                        href="/signup"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all"
                    >
                        Get Started
                    </a>
                </div>
            </section>

            <CallToAction />
        </div>
    );
};

export default Explore;