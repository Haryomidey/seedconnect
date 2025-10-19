import { motion } from "framer-motion";
import { MapPin, Globe, Briefcase, Calendar, TrendingUp } from "lucide-react";

interface Business {
    id: string;
    name: string;
    shortDescription: string;
    amountRaised: number;
    targetAmount: number;
    image: string;
}

interface UserProfile {
    id: string;
    name: string;
    title: string;
    bio: string;
    location: string;
    website: string;
    joinDate: string;
    profileImage: string;
    totalRaised: number;
    totalBusinesses: number;
    businesses: Business[];
}

const BusinessProfile = () => {
    const user: UserProfile = {
        id: "u1",
        name: "Adebayo Johnson",
        title: "Founder & CEO of EcoHarvest Farms",
        bio: "An entrepreneur passionate about sustainable agriculture and leveraging technology to improve Africa’s food systems.",
        location: "Lagos, Nigeria",
        website: "https://adebayo.io",
        joinDate: "2024-07-15",
        profileImage: "https://i.pravatar.cc/150?img=12",
        totalRaised: 75000,
        totalBusinesses: 1,
        businesses: [
            {
                id: "b1",
                name: "EcoHarvest Farms",
                shortDescription: "IoT-powered organic farming startup.",
                amountRaised: 50000,
                targetAmount: 200000,
                image: "https://logo.clearbit.com/jumia.com",
            },
            // {
            //     id: "b2",
            //     name: "AgriLink",
            //     shortDescription: "Digital marketplace connecting farmers and buyers.",
            //     amountRaised: 25000,
            //     targetAmount: 100000,
            //     image: "https://logo.clearbit.com/paystack.com",
            // },
        ],
    };

    return (
        <div className="bg-white text-gray-900">
            <section className="bg-gray-50 py-20 px-6 text-center flex items-center min-h-[450px]">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <img
                        src={user.profileImage}
                        alt={user.name}
                        className="w-32 h-32 mx-auto rounded-full shadow-md mb-6 object-cover border-4 border-white"
                    />
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">{user.name}</h1>
                    <p className="text-gray-600 mb-6 text-lg">{user.title}</p>
                    <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">{user.bio}</p>

                    <div className="flex justify-center gap-4 flex-wrap mt-8 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-blue-600" />
                            {user.location}
                        </span>
                        <span className="flex items-center gap-1">
                            <Globe className="w-4 h-4 text-blue-600" />
                            <a
                                href={user.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline text-blue-600"
                            >
                                {user.website.replace(/^https?:\/\//, "")}
                            </a>
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-blue-600" />
                            Joined {new Date(user.joinDate).toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric",
                            })}
                        </span>
                    </div>
                </motion.div>
            </section>

            <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-sm"
                >
                    <TrendingUp className="w-6 h-6 mx-auto mb-2 text-blue-700" />
                    <h3 className="text-lg font-semibold">Total Raised</h3>
                    <p className="text-2xl font-bold text-blue-700 mt-1">
                        ${user.totalRaised.toLocaleString()}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-green-50 border border-green-100 rounded-2xl p-6 shadow-sm"
                >
                    <Briefcase className="w-6 h-6 mx-auto mb-2 text-green-700" />
                    <h3 className="text-lg font-semibold">Businesses</h3>
                    <p className="text-2xl font-bold text-green-700 mt-1">{user.totalBusinesses}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-yellow-50 border border-yellow-100 rounded-2xl p-6 shadow-sm"
                >
                    <Calendar className="w-6 h-6 mx-auto mb-2 text-yellow-700" />
                    <h3 className="text-lg font-semibold">Member Since</h3>
                    <p className="text-2xl font-bold text-yellow-700 mt-1">
                        {new Date(user.joinDate).getFullYear()}
                    </p>
                </motion.div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-bold mb-8 text-gray-900">My Business</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {user.businesses.map((biz) => {
                        const progress = Math.min(
                            (biz.amountRaised / biz.targetAmount) * 100,
                            100
                        );
                        return (
                            <motion.div
                                key={biz.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
                            >
                                <img
                                    src={biz.image}
                                    alt={biz.name}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-5">
                                    <h3 className="font-bold text-lg mb-1 text-gray-900">
                                        {biz.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        {biz.shortDescription}
                                    </p>
                                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                                        <div
                                            className="bg-blue-600 h-2 rounded-full"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        {progress.toFixed(1)}% funded (${biz.amountRaised.toLocaleString()})
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default BusinessProfile;