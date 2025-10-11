import { motion } from "framer-motion"
import { X } from "lucide-react"

interface Props {
    isOpen: boolean
    onClose: () => void
}

const AddUpdateModal = ({ isOpen, onClose }: Props) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
                className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    <X className="w-5 h-5" />
                </button>

                <h2 className="text-2xl font-bold text-blue-700 mb-4">Add Business Update</h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-700"
                            placeholder="e.g., New funding milestone"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-700"
                            rows={4}
                            placeholder="Describe your update..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
                    >
                        Submit Update
                    </button>
                </form>
            </motion.div>
        </div>
    )
}

export default AddUpdateModal;