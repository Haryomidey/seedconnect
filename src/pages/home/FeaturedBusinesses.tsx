import { motion } from "framer-motion"
import BusinessCard from "../../components/BusinessCard"
import { businesses } from "../../data/businesses"

const FeaturedBusinesses = () => {
    return (
        <section className="max-w-7xl mx-auto py-24 px-6">
            <h2 className="text-4xl font-bold text-center mb-14">
                Featured <span className="text-blue-700">Businesses</span>
            </h2>

            <div className="grid gap-10 md:grid-cols-3">
                {businesses.slice(0, 6).map((business, index) => (
                    <motion.div
                        key={business.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        viewport={{ once: true }}
                    >
                        <BusinessCard
                            id={business.id}
                            title={business.name}
                            description={business.shortDescription}
                            fundingGoal={`$${business.targetAmount.toLocaleString()}`}
                            raised={`$${business.amountRaised.toLocaleString()}`}
                            image={business.image}
                            progress={(business.amountRaised / business.targetAmount) * 100}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedBusinesses;