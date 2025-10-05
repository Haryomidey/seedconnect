import { motion } from "framer-motion";
import Hero from "../../components/Hero";
import BusinessCard from "../../components/BusinessCard";
import CallToAction from "../../components/CallToAction";
import {
    Lightbulb,
    Users,
    Shield,
    TrendingUp,
    Briefcase,
    Star,
    CheckCircle,
    ArrowRight,
    Mail,
} from "lucide-react";

const Home = () => {
    return (
        <div className="bg-white text-gray-900">
            <Hero />

            <section className="max-w-7xl mx-auto py-24 px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
                    Why Choose <span className="text-blue-700">SeedConnect?</span>
                </h2>

                <div className="grid gap-10 md:grid-cols-3">
                    {[
                        {
                            title: "For Entrepreneurs",
                            desc: "Showcase your ideas, share your story, and connect with investors ready to believe in your vision.",
                            icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
                        },
                        {
                            title: "For Investors",
                            desc: "Discover promising businesses across sectors. Donate or invest with equity/profit sharing.",
                            icon: <Briefcase className="w-10 h-10 text-blue-600" />,
                        },
                        {
                            title: "Safe & Transparent",
                            desc: "Your data and money are protected with a secure and transparent system.",
                            icon: <Shield className="w-10 h-10 text-blue-600" />,
                        },
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white shadow-sm hover:shadow-md rounded-2xl p-8 border border-gray-100 transition-all"
                        >
                            <div className="mb-6">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-gray-50 py-24 px-6">
                <h2 className="text-4xl font-bold text-center mb-16">
                    How <span className="text-blue-700">It Works</span>
                </h2>

                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
                    {[
                        {
                            step: "1",
                            title: "Create a Profile",
                            desc: "Entrepreneurs sign up and showcase their business.",
                            icon: <Users className="w-8 h-8 text-blue-600" />,
                        },
                        {
                            step: "2",
                            title: "Connect",
                            desc: "Investors discover businesses that match their interests.",
                            icon: <ArrowRight className="w-8 h-8 text-blue-600" />,
                        },
                        {
                            step: "3",
                            title: "Fund & Grow",
                            desc: "Support with donations or investments, and watch businesses thrive.",
                            icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
                        },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-8 text-center"
                        >
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <p className="text-sm text-blue-600 font-semibold mb-2">
                                Step {item.step}
                            </p>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto py-24 px-6">
                <h2 className="text-4xl font-bold text-center mb-14">
                    Featured <span className="text-blue-700">Businesses</span>
                </h2>

                <div className="grid gap-10 md:grid-cols-3">
                    {[1, 2, 3].map((id) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: id * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <BusinessCard
                                title={`Business ${id}`}
                                description="A powerful idea turning into reality. This is a sample business description that explains the entrepreneur's journey and needs."
                                fundingGoal="$5,000"
                                raised="$1,200"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

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

            <section className="max-w-7xl mx-auto py-24 px-6">
                <h2 className="text-4xl font-bold text-center mb-14">
                    What People <span className="text-blue-700">Say</span>
                </h2>

                <div className="grid gap-10 md:grid-cols-2">
                    {[
                        {
                            name: "Amaka N.",
                            role: "Entrepreneur",
                            text: "SeedConnect helped me find the right investor for my fashion business. Now we're scaling across the region!",
                        },
                        {
                            name: "John D.",
                            role: "Investor",
                            text: "I discovered promising startups here and supported one that doubled its revenue in just 6 months.",
                        },
                    ].map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all"
                        >
                            <p className="text-gray-700 italic mb-6 leading-relaxed">
                                “{t.text}”
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <p className="font-semibold">{t.name}</p>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                    <div className="flex text-yellow-400 mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="max-w-4xl mx-auto py-24 px-6">
                <h2 className="text-4xl font-bold text-center mb-14">
                    Frequently Asked <span className="text-blue-700">Questions</span>
                </h2>

                <div className="space-y-6">
                    {[
                        {
                            q: "How do entrepreneurs join?",
                            a: "Sign up for free, create a profile, and list your business details for potential investors.",
                        },
                        {
                            q: "Is it only for donations?",
                            a: "No, investors can choose to donate or invest with equity/profit share.",
                        },
                        {
                            q: "Is my data safe?",
                            a: "Yes. We prioritize transparency and security in every step.",
                        },
                    ].map((faq, idx) => (
                        <motion.details
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all"
                        >
                            <summary className="font-semibold flex justify-between items-center cursor-pointer">
                                {faq.q}
                                <span className="text-blue-600">›</span>
                            </summary>
                            <p className="text-gray-600 mt-3">{faq.a}</p>
                        </motion.details>
                    ))}
                </div>
            </section>

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