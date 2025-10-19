import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CallToAction = () => {
    return (
        <motion.section
            className="bg-gray-50 py-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
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
        </motion.section>
    );
};

export default CallToAction;

