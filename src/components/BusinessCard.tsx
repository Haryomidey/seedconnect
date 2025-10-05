type Props = {
    title: string;
    description: string;
    fundingGoal: string;
    raised: string;
};

const BusinessCard = ({ title, description, fundingGoal, raised }: Props) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex justify-between items-center text-sm text-gray-700">
                <span>Goal: {fundingGoal}</span>
                <span>Raised: {raised}</span>
            </div>
            <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary">
                Support
            </button>
        </div>
    );
};

export default BusinessCard;