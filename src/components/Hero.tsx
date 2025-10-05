import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";
import HeroImage from '../assets/hero.png';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute w-[600px] h-[600px] bg-blue-200 rounded-full blur-3xl -top-40 -left-40"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute w-[500px] h-[500px] bg-blue-300 rounded-full blur-3xl -bottom-40 -right-40"
            />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12 w-full">
                <div className="text-center md:text-left max-w-2xl">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
                    >
                        Empowering <span className="text-blue-700">Entrepreneurs</span>,  
                        <br /> Connecting <span className="text-blue-500">Investors</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-600 mb-8"
                    >
                        SeedConnect bridges passionate entrepreneurs with investors.  
                        Share your business, attract funding, and grow together because  
                        every idea deserves a chance to thrive.
                    </motion.p>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Link
                            to="/signup"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-full font-semibold text-white bg-blue-600 shadow-md hover:bg-blue-700 transition"
                        >
                            <FaSeedling className="mr-2" /> Get Started
                        </Link>
                        <Link
                            to="/explore"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-full font-semibold text-blue-600 border border-blue-600 hover:bg-blue-50 transition"
                        >
                            Explore Businesses
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex-1 flex justify-center"
                >
                    <img
                        src={HeroImage}
                        alt="Entrepreneurs and investors connecting"
                        className="w-full max-w-md"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;