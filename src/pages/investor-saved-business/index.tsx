import { Bookmark } from "lucide-react";
import { businesses } from "../../data/businesses";
import BusinessCard from "../../components/BusinessCard";

const SavedBusinesses = () => {
    const savedBusinesses = businesses;

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <Bookmark className="w-6 h-6 text-blue-700" />
                    Saved Businesses
                </h2>
                <p className="text-sm text-gray-500">
                    You've saved {savedBusinesses.length} businesses
                </p>
            </div>

            {savedBusinesses.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {savedBusinesses.map((biz) => (
                        <BusinessCard key={biz.id} business={biz} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                    <Bookmark className="w-10 h-10 mb-3 text-blue-700" />
                    <p className="font-medium">No saved businesses yet</p>
                    <p className="text-sm text-gray-400">
                        When you save a business, it will appear here.
                    </p>
                </div>
            )}
        </div>
    );
};

export default SavedBusinesses;