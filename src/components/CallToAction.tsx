import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CallToAction = () => {
    return (
        <motion.section
            className="bg-accent text-white py-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="mb-6">Join SeedConnect today and empower small businesses worldwide.</p>
            <Link
                to="/signup"
                className="px-6 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-gray-200"
            >
                Get Started
            </Link>
        </motion.section>
    );
};

export default CallToAction;