type Business = {
    id: string
    name: string
    shortDescription: string
    longDescription: string
    amountRaised: number
    targetAmount: number
    industry: string
    location: string
    founder: string
    website?: string
    image?: string
    createdAt: string
}

export const businesses: Business[] = [
    {
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
        image: "/images/ecoharvest.png",
        createdAt: "2025-09-20",
    },
    {
        id: "2",
        name: "FinLink",
        shortDescription: "AI-powered financial platform for SMEs.",
        longDescription:
            "FinLink helps small and medium enterprises access loans and manage cashflow using AI-driven credit scoring and partnerships with verified investors.",
        amountRaised: 125000,
        targetAmount: 500000,
        industry: "Fintech",
        location: "Nairobi, Kenya",
        founder: "Grace Njoroge",
        website: "https://finlink.africa",
        image: "/images/finlink.png",
        createdAt: "2025-08-11",
    },
    {
        id: "3",
        name: "HealthSphere",
        shortDescription: "Telemedicine for underserved areas.",
        longDescription:
            "HealthSphere connects patients in remote areas with certified doctors via mobile consultations and AI-assisted symptom checking tools.",
        amountRaised: 80000,
        targetAmount: 300000,
        industry: "HealthTech",
        location: "Accra, Ghana",
        founder: "Kwame Mensah",
        website: "https://healthsphere.co",
        image: "/images/healthsphere.png",
        createdAt: "2025-07-15",
    },
    {
        id: "4",
        name: "SwiftRide",
        shortDescription: "Electric bike sharing for urban mobility.",
        longDescription:
            "SwiftRide provides eco-friendly electric bike rentals for city commuters, reducing traffic congestion and promoting sustainable transport.",
        amountRaised: 95000,
        targetAmount: 400000,
        industry: "Transportation",
        location: "Johannesburg, South Africa",
        founder: "Tinashe Moyo",
        website: "https://swiftride.africa",
        image: "/images/swiftride.png",
        createdAt: "2025-06-10",
    },
    {
        id: "5",
        name: "EduSmart",
        shortDescription: "Personalized online learning for students.",
        longDescription:
            "EduSmart uses adaptive AI algorithms to create personalized study paths for students, improving learning outcomes through gamified lessons.",
        amountRaised: 60000,
        targetAmount: 250000,
        industry: "EdTech",
        location: "Abuja, Nigeria",
        founder: "Chidinma Okeke",
        website: "https://edusmart.io",
        image: "/images/edusmart.png",
        createdAt: "2025-05-22",
    },
    {
        id: "6",
        name: "AquaPure Systems",
        shortDescription: "Clean water technology for communities.",
        longDescription:
            "AquaPure develops solar-powered water purification systems to provide affordable access to safe drinking water in rural and semi-urban areas.",
        amountRaised: 150000,
        targetAmount: 500000,
        industry: "CleanTech",
        location: "Kampala, Uganda",
        founder: "Joseph Mugisha",
        website: "https://aquapure.tech",
        image: "/images/aquapure.png",
        createdAt: "2025-04-18",
    },
    {
        id: "7",
        name: "ShopEase",
        shortDescription: "E-commerce for local artisans.",
        longDescription:
            "ShopEase empowers local artisans to sell handmade products online through an easy-to-use marketplace integrated with logistics and payments.",
        amountRaised: 90000,
        targetAmount: 350000,
        industry: "E-commerce",
        location: "Accra, Ghana",
        founder: "Ama Boateng",
        website: "https://shopease.africa",
        image: "/images/shopease.png",
        createdAt: "2025-03-02",
    },
    {
        id: "8",
        name: "PowerLink Energy",
        shortDescription: "Affordable solar energy solutions.",
        longDescription:
            "PowerLink designs and installs modular solar energy systems for small businesses and households, aiming to reduce dependence on unreliable grids.",
        amountRaised: 180000,
        targetAmount: 600000,
        industry: "EnergyTech",
        location: "Dar es Salaam, Tanzania",
        founder: "Lydia Mwangi",
        website: "https://powerlink.energy",
        image: "/images/powerlink.png",
        createdAt: "2025-02-14",
    },
]