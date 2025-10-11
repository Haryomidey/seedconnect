import { motion } from "framer-motion";
import Hero from "../../components/Hero";
import CallToAction from "../../components/CallToAction";
import {
    Users,
    TrendingUp,
    Briefcase,
    Mail,
} from "lucide-react";
import Faqs from "./Faqs";
import WhyChooseUs from "./WhyChooseUs";
import HowItWorks from "./HowItWorks";
import FeaturedBusinesses from "./FeaturedBusinesses";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div className="bg-white text-gray-900">
            <Hero />

            <WhyChooseUs />

            <HowItWorks />

            <FeaturedBusinesses />

            <section className="bg-gray-50 py-24 px-6">
                <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 text-center">
                    {[
                        {
                            label: "Total Funds Raised",
                            value: "$1.2M+",
                            icon: <TrendingUp className="w-8 h-8 text-blue-700 mx-auto mb-4" />,
                        },
                        {
                            label: "Entrepreneurs Supported",
                            value: "350+",
                            icon: <Users className="w-8 h-8 text-blue-700 mx-auto mb-4" />,
                        },
                        {
                            label: "Active Investors",
                            value: "120+",
                            icon: <Briefcase className="w-8 h-8 text-blue-700 mx-auto mb-4" />,
                        },
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-md transition-all"
                        >
                            {stat.icon}
                            <p className="text-4xl font-extrabold text-blue-700">{stat.value}</p>
                            <p className="text-gray-600 mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Testimonials />

           <Faqs />

            <section className="bg-gray-50 py-24 px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">Stay Updated 🚀</h2>
                <p className="text-gray-600 mb-8">
                    Subscribe to get the latest businesses, news, and updates.
                </p>

                <form className="max-w-md mx-auto flex gap-3">
                    <div className="relative flex-1">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
                        />
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all">
                        Subscribe
                    </button>
                </form>
            </section>

            <CallToAction />
        </div>
    );
};

export default Home;