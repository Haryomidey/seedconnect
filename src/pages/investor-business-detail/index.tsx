import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    Bookmark,
    BookmarkCheck,
    Heart,
    HeartOff,
    DollarSign,
    Target,
    MapPin,
    Globe,
    MessageCircle,
    ArrowLeft,
    User
} from "lucide-react";
import { businesses } from "../../data/businesses";

const InvestorBusinessDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const business = businesses.find((b) => b.id === id);

    const [saved, setSaved] = useState(false);
    const [followed, setFollowed] = useState(false);

    if (!business) {
        return (
            <div className="p-10 text-center text-gray-600">
                Business not found.
                <button
                    onClick={() => navigate(-1)}
                    className="block mx-auto mt-4 text-blue-600 hover:underline"
                >
                    Go Back
                </button>
            </div>
        );
    }

    const progress = (business.amountRaised / business.targetAmount) * 100;

    return (
        <div className="max-w-6xl mx-auto p-8">
            {/* Back button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 hover:text-blue-700 mb-6 transition"
            >
                <ArrowLeft className="w-5 h-5 mr-1" /> Back
            </button>

            {/* Main Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-gray-200 rounded-3xl shadow-md overflow-hidden"
            >
                {/* Banner Image */}
                {business.image && (
                    <div className="relative">
                        <img
                            src={business.image}
                            alt={business.name}
                            className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-8 text-white">
                            <h1 className="text-4xl font-bold mb-2 drop-shadow-md">
                                {business.name}
                            </h1>
                            <p className="text-sm opacity-90">{business.industry}</p>
                        </div>
                    </div>
                )}

                {/* Info Section */}
                <div className="p-8">
                    {/* Founder and Location */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                        <div className="flex items-center gap-3 text-gray-600">
                            <User className="w-5 h-5 text-blue-700" />
                            <span className="font-medium">
                                Founded by {business.founder}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 mt-3 md:mt-0 text-gray-500">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{business.location}</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        {business.longDescription || business.shortDescription}
                    </p>

                    {/* Funding Info */}
                    <div className="mb-8">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>
                                <DollarSign className="w-4 h-4 inline text-blue-700 mr-1" />
                                ${business.amountRaised.toLocaleString()} raised
                            </span>
                            <span>
                                <Target className="w-4 h-4 inline text-gray-400 mr-1" />
                                Target: ${business.targetAmount.toLocaleString()}
                            </span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-3">
                            <div
                                className="bg-gradient-to-r from-blue-700 to-blue-500 h-3 rounded-full transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <p className="text-right text-xs text-gray-500 mt-1">
                            {progress.toFixed(1)}% funded
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        <button
                            onClick={() => setSaved(!saved)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition ${
                                saved
                                    ? "bg-blue-50 border-blue-600 text-blue-700"
                                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                            }`}
                        >
                            {saved ? (
                                <>
                                    <BookmarkCheck className="w-4 h-4" /> Saved
                                </>
                            ) : (
                                <>
                                    <Bookmark className="w-4 h-4" /> Save
                                </>
                            )}
                        </button>

                        <button
                            onClick={() => setFollowed(!followed)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition ${
                                followed
                                    ? "bg-red-50 border-red-500 text-red-600"
                                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                            }`}
                        >
                            {followed ? (
                                <>
                                    <HeartOff className="w-4 h-4" /> Unfollow
                                </>
                            ) : (
                                <>
                                    <Heart className="w-4 h-4" /> Follow
                                </>
                            )}
                        </button>

                        <button
                            onClick={() => navigate('/investor/messages')}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-xl text-sm font-medium hover:bg-blue-800 transition"
                        >
                            <MessageCircle className="w-4 h-4" /> Message
                        </button>
                    </div>

                    {business.website && (
                        <a
                            href={business.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-700 hover:underline text-sm font-medium"
                        >
                            <Globe className="w-4 h-4" /> Visit Website
                        </a>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default InvestorBusinessDetail;