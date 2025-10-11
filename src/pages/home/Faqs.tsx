import { motion } from "framer-motion";

const Faqs = () => {
    return (
         <section className="max-w-4xl mx-auto py-24 px-6">
            <h2 className="text-4xl font-bold text-center mb-14">
                Frequently Asked <span className="text-blue-700">Questions</span>
            </h2>

            <div className="space-y-6">
                {[
                    {
                        q: "How do entrepreneurs join?",
                        a: "Sign up for free, create a profile, and list your business details for potential investors.",
                    },
                    {
                        q: "Is it only for donations?",
                        a: "No, investors can choose to donate or invest with equity/profit share.",
                    },
                    {
                        q: "Is my data safe?",
                        a: "Yes. We prioritize transparency and security in every step.",
                    },
                ].map((faq, idx) => (
                    <motion.details
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.2 }}
                        viewport={{ once: true }}
                        className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all"
                    >
                        <summary className="font-semibold flex justify-between items-center cursor-pointer">
                            {faq.q}
                            <span className="text-blue-600">›</span>
                        </summary>
                        <p className="text-gray-600 mt-3">{faq.a}</p>
                    </motion.details>
                ))}
            </div>
        </section>
    )
}

export default Faqs;