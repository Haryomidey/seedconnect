import { Link } from "react-router-dom";
import DummyImage from '../assets/dummy.png'

type Props = {
    id: string
    title: string
    description: string
    fundingGoal: string
    raised: string
    image?: string
    progress: number
}

const BusinessCard = ({ id, title, description, fundingGoal, raised, image, progress }: Props) => {
    return (
        <Link to={`/business/${id}`}>
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition transform hover:-translate-y-1">
                {image && (
                    <img
                        src={DummyImage}
                        alt={title}
                        className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                )}
                <h3 className="text-xl font-bold text-blue-700 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

                <div className="w-full bg-gray-200 h-2 rounded-full mb-3">
                    <div
                        className="h-2 rounded-full bg-blue-600"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-700 mb-3">
                    <span>Goal: {fundingGoal}</span>
                    <span>Raised: {raised}</span>
                </div>

                <button className="mt-2 w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition">
                    See business
                </button>
            </div>
        </Link>
    )
}

export default BusinessCard;