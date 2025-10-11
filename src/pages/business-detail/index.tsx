import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { businesses } from "../../data/businesses"
import {
    MapPin,
    Globe,
    Briefcase,
    User,
    Target,
    TrendingUp,
    CalendarDays,
    CircleDollarSign,
    Users,
} from "lucide-react";
import DummyImage from '../../assets/dummy.png';

const BusinessDetail = () => {
    const { id } = useParams()
    const business = businesses.find((b) => b.id === id)

    if (!business) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
                <h2 className="text-3xl font-semibold text-gray-700 mb-4">
                    Business not found
                </h2>
                <Link
                    to="/"
                    className="mt-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
                >
                    Back to Home
                </Link>
            </div>
        )
    }

    const progress = (business.amountRaised / business.targetAmount) * 100

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto py-20 px-6"
        >
            <div className="flex flex-col lg:flex-row gap-10 items-start">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex-shrink-0 w-full lg:w-1/2"
                >
                    <img
                        src={DummyImage}
                        alt={business.name}
                        className="w-full h-[380px] object-cover rounded-3xl shadow-xl"
                    />
                </motion.div>

                <div className="flex-1">
                    <h1 className="text-5xl font-bold text-gray-900 mb-5 leading-tight">
                        {business.name}
                    </h1>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {business.longDescription}
                    </p>

                    <div className="w-full bg-gray-200 h-3 rounded-full mb-3 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 1 }}
                            className="h-3 bg-gradient-to-r from-blue-700 to-blue-400"
                        />
                    </div>

                    <div className="flex justify-between text-gray-800 font-semibold mb-8">
                        <div className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-blue-700" />
                            Goal:{" "}
                            <span className="text-blue-700">
                                ${business.targetAmount.toLocaleString()}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-green-600" />
                            Raised:{" "}
                            <span className="text-green-600">
                                ${business.amountRaised.toLocaleString()}
                            </span>
                        </div>
                    </div>

                    <button className="w-full py-4 bg-blue-700 hover:bg-blue-800 text-white text-lg rounded-2xl shadow-md transition flex items-center justify-center gap-2">
                        <CircleDollarSign className="w-5 h-5" />
                        Support This Business
                    </button>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-20 bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-3xl p-10"
            >
                <h2 className="text-3xl font-bold text-blue-700 mb-8">
                    Business Overview
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                    <div className="space-y-4">
                        <p className="flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-blue-700" />
                            <span>
                                <strong>Industry:</strong> {business.industry}
                            </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-blue-700" />
                            <span>
                                <strong>Location:</strong> {business.location}
                            </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <User className="w-5 h-5 text-blue-700" />
                            <span>
                                <strong>Founder:</strong> {business.founder}
                            </span>
                        </p>
                    </div>

                    <div className="space-y-4">
                        <p className="flex items-center gap-2">
                            <Globe className="w-5 h-5 text-blue-700" />
                            <span>
                                <strong>Website:</strong>{" "}
                                {business.website ? (
                                    <a
                                        href={business.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-700 hover:underline"
                                    >
                                        {business.website}
                                    </a>
                                ) : (
                                    "N/A"
                                )}
                            </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <CalendarDays className="w-5 h-5 text-blue-700" />
                            <span>
                                <strong>Date Listed:</strong>{" "}
                                {new Date(business.createdAt).toLocaleDateString()}
                            </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-blue-700" />
                            <span>
                                <strong>Funding Progress:</strong>{" "}
                                {progress.toFixed(1)}%
                            </span>
                        </p>
                    </div>

                    <div className="space-y-4">
                        <p className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-700" />
                            <span>
                                <strong>Investor Interest:</strong>{" "}
                                {Math.floor(progress / 10) + 4} investors
                            </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-blue-700" />
                            <span>
                                <strong>Status:</strong>{" "}
                                {progress >= 100 ? (
                                    <span className="text-green-600 font-semibold">
                                        Fully Funded
                                    </span>
                                ) : (
                                    <span className="text-yellow-600 font-semibold">
                                        Raising
                                    </span>
                                )}
                            </span>
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default BusinessDetail;