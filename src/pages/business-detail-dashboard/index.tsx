import { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import {
    Save,
    Edit3,
    Building2,
    MapPin,
    User,
} from "lucide-react";

interface Business {
    id: string;
    name: string;
    shortDescription: string;
    longDescription: string;
    amountRaised: number;
    targetAmount: number;
    industry: string;
    location: string;
    founder: string;
    website: string;
    image: string;
    createdAt: string;
}

const BusinessDetailDashboard = () => {
    const [editing, setEditing] = useState<boolean>(false);

    const [business, setBusiness] = useState<Business>({
        id: "1",
        name: "EcoHarvest Farms",
        shortDescription: "Sustainable organic farming startup.",
        longDescription:
            "EcoHarvest Farms leverages IoT-based irrigation and organic farming methods to boost crop yield and promote eco-friendly agriculture across Africa.",
        amountRaised: 50000,
        targetAmount: 200000,
        industry: "Agriculture",
        location: "Lagos, Nigeria",
        founder: "Adebayo Johnson",
        website: "https://ecoharvest.ng",
        image: "https://logo.clearbit.com/jumia.com",
        createdAt: "2025-09-20",
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setBusiness((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        setEditing(false);
        console.log("Updated business data:", business);
    };

    return (
        <div className="bg-white min-h-screen text-gray-900">
            <section className="bg-gray-50 py-16 px-6 text-center flex items-center min-h-[300px]">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <img
                        src={business.image}
                        alt={business.name}
                        className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border shadow-sm"
                    />

                    {editing ? (
                        <input
                            type="text"
                            name="name"
                            value={business.name}
                            onChange={handleChange}
                            className="text-center text-3xl md:text-4xl font-bold border-b border-gray-300 focus:outline-none focus:border-blue-600 mb-3 w-full bg-transparent"
                        />
                    ) : (
                        <h1 className="text-4xl font-extrabold mb-3">
                            {business.name}
                        </h1>
                    )}

                    {editing ? (
                        <textarea
                            name="shortDescription"
                            value={business.shortDescription}
                            onChange={handleChange}
                            className="w-full text-center text-gray-600 border rounded-lg p-2 focus:ring-2 focus:ring-blue-600"
                        />
                    ) : (
                        <p className="text-gray-600 text-lg max-w-xl mx-auto">
                            {business.shortDescription}
                        </p>
                    )}

                    <div className="mt-6 flex justify-center gap-4 flex-wrap text-gray-600 text-sm">
                        <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-blue-600" />
                            {business.location}
                        </span>
                        <span className="flex items-center gap-1">
                            <User className="w-4 h-4 text-blue-600" />
                            {business.founder}
                        </span>
                        <span className="flex items-center gap-1">
                            <Building2 className="w-4 h-4 text-blue-600" />
                            {business.industry}
                        </span>
                    </div>
                </motion.div>
            </section>

            <section className="max-w-6xl mx-auto py-16 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8"
                >
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Business Details
                        </h2>
                        <button
                            onClick={() =>
                                editing ? handleSave() : setEditing(true)
                            }
                            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            {editing ? (
                                <Save className="w-5 h-5" />
                            ) : (
                                <Edit3 className="w-5 h-5" />
                            )}
                            {editing ? "Save" : "Edit"}
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Founder Name
                            </label>
                            {editing ? (
                                <input
                                    type="text"
                                    name="founder"
                                    value={business.founder}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
                                />
                            ) : (
                                <p className="text-gray-800">
                                    {business.founder}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Website
                            </label>
                            {editing ? (
                                <input
                                    type="text"
                                    name="website"
                                    value={business.website}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
                                />
                            ) : (
                                <a
                                    href={business.website}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    {business.website}
                                </a>
                            )}
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Long Description
                            </label>
                            {editing ? (
                                <textarea
                                    name="longDescription"
                                    value={business.longDescription}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
                                />
                            ) : (
                                <p className="text-gray-800 leading-relaxed">
                                    {business.longDescription}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Amount Raised ($)
                            </label>
                            {editing ? (
                                <input
                                    type="number"
                                    name="amountRaised"
                                    value={business.amountRaised}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
                                />
                            ) : (
                                <p className="text-gray-800">
                                    ${business.amountRaised.toLocaleString()}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Target Amount ($)
                            </label>
                            {editing ? (
                                <input
                                    type="number"
                                    name="targetAmount"
                                    value={business.targetAmount}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
                                />
                            ) : (
                                <p className="text-gray-800">
                                    ${business.targetAmount.toLocaleString()}
                                </p>
                            )}
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default BusinessDetailDashboard;