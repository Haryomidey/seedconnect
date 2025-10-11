import { motion } from "framer-motion";
import { Briefcase, Lightbulb, Shield } from "lucide-react";

const WhyChooseUs = () => {
    return (
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
    )
}

export default WhyChooseUs;