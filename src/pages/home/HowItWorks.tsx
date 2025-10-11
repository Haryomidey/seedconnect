import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users } from "lucide-react";

const HowItWorks = () => {
    return (
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
    )
}

export default HowItWorks;