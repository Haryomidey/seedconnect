import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Briefcase,
    Mail,
    MapPin,
    Edit3,
    DollarSign,
    Heart,
    Bookmark,
    Activity,
    X,
    Upload,
} from "lucide-react";

const InvestorProfile = () => {
    const [investor, setInvestor] = useState({
        name: "David Okafor",
        title: "Angel Investor | Tech Enthusiast",
        email: "david.okafor@example.com",
        location: "Lagos, Nigeria",
        bio: "Experienced investor passionate about supporting African startups in technology, renewable energy, and fintech sectors. Believes in innovation, impact, and inclusion.",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        stats: {
            totalInvestments: 14,
            totalAmount: 120000,
            followedBusinesses: 32,
            savedBusinesses: 18,
        },
        recentActivities: [
            {
                id: 1,
                action: "Invested $10,000 in GreenTech Energy",
                date: "3 days ago",
            },
            {
                id: 2,
                action: "Followed FarmLink Africa",
                date: "1 week ago",
            },
            {
                id: 3,
                action: "Saved SwiftPay for later review",
                date: "2 weeks ago",
            },
        ],
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(investor);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, avatar: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        setInvestor(formData);
        setIsEditing(false);
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10"
            >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-6">
                        <img
                            src={investor.avatar}
                            alt={investor.name}
                            className="w-28 h-28 rounded-full object-cover border-4 border-blue-100"
                        />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">
                                {investor.name}
                            </h1>
                            <p className="text-gray-500">{investor.title}</p>
                            <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <Mail className="w-4 h-4 text-blue-700" />
                                    {investor.email}
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4 text-blue-700" />
                                    {investor.location}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsEditing(true)}
                        className="flex items-center gap-2 bg-blue-700 text-white text-sm px-4 py-2 rounded-lg mt-6 md:mt-0 hover:bg-blue-800 transition"
                    >
                        <Edit3 className="w-4 h-4" /> Edit Profile
                    </button>
                </div>

                <p className="text-gray-700 mt-6 leading-relaxed">{investor.bio}</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center"
                >
                    <DollarSign className="w-6 h-6 mx-auto text-blue-700 mb-2" />
                    <h3 className="text-2xl font-bold text-gray-800">
                        {investor.stats.totalInvestments}
                    </h3>
                    <p className="text-gray-500 text-sm">Investments Made</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center"
                >
                    <Briefcase className="w-6 h-6 mx-auto text-blue-700 mb-2" />
                    <h3 className="text-2xl font-bold text-gray-800">
                        ${investor.stats.totalAmount.toLocaleString()}
                    </h3>
                    <p className="text-gray-500 text-sm">Total Invested</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center"
                >
                    <Heart className="w-6 h-6 mx-auto text-blue-700 mb-2" />
                    <h3 className="text-2xl font-bold text-gray-800">
                        {investor.stats.followedBusinesses}
                    </h3>
                    <p className="text-gray-500 text-sm">Followed Businesses</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center"
                >
                    <Bookmark className="w-6 h-6 mx-auto text-blue-700 mb-2" />
                    <h3 className="text-2xl font-bold text-gray-800">
                        {investor.stats.savedBusinesses}
                    </h3>
                    <p className="text-gray-500 text-sm">Saved Businesses</p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
            >
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
                    <Activity className="w-5 h-5 text-blue-700" /> Recent Activity
                </h2>

                {investor.recentActivities.length > 0 ? (
                    <ul className="space-y-4">
                        {investor.recentActivities.map((activity) => (
                            <li
                                key={activity.id}
                                className="flex items-center justify-between border-b border-gray-100 pb-3"
                            >
                                <p className="text-gray-700 text-sm">{activity.action}</p>
                                <span className="text-xs text-gray-400">{activity.date}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 text-sm">
                        No recent activities yet.
                    </p>
                )}
            </motion.div>

            <AnimatePresence>
                {isEditing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl p-8 w-full max-w-lg relative shadow-lg"
                        >
                            <button
                                onClick={() => setIsEditing(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                                <Edit3 className="w-5 h-5 text-blue-700" /> Edit Profile
                            </h2>

                            <div className="flex flex-col items-center mb-6">
                                <img
                                    src={formData.avatar}
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 mb-3"
                                />
                                <label className="cursor-pointer text-blue-700 text-sm flex items-center gap-1 hover:underline">
                                    <Upload className="w-4 h-4" />
                                    Change Image
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </label>
                            </div>

                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Title"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="Location"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Short Bio"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="px-4 py-2 text-sm border rounded-lg text-gray-600 hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="px-4 py-2 text-sm bg-blue-700 text-white rounded-lg hover:bg-blue-800"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default InvestorProfile;