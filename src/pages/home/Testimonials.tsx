import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
    return (
        <section className="max-w-7xl mx-auto py-24 px-6">
            <h2 className="text-4xl font-bold text-center mb-14">
                What People <span className="text-blue-700">Say</span>
            </h2>

            <div className="grid gap-10 md:grid-cols-2">
                {[
                    {
                        name: "Amaka N.",
                        role: "Entrepreneur",
                        text: "SeedConnect helped me find the right investor for my fashion business. Now we're scaling across the region!",
                    },
                    {
                        name: "John D.",
                        role: "Investor",
                        text: "I discovered promising startups here and supported one that doubled its revenue in just 6 months.",
                    },
                ].map((t, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all"
                    >
                        <p className="text-gray-700 italic mb-6 leading-relaxed">
                            “{t.text}”
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                                {t.name[0]}
                            </div>
                            <div>
                                <p className="font-semibold">{t.name}</p>
                                <p className="text-sm text-gray-500">{t.role}</p>
                                <div className="flex text-yellow-400 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials;