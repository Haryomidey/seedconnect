import { useState } from "react";
import { motion } from "framer-motion";
import {
    Search,
    MoreVertical,
    Send,
    AlertTriangle,
    ArrowLeft,
} from "lucide-react";

const dummyChats = [
    {
        id: "1",
        name: "TechNova Solutions",
        lastMessage: "We just hit 80% of our target funding!",
        time: "10:45 AM",
        avatar: "https://i.pravatar.cc/150?img=8",
        messages: [
            { from: "them", text: "Hello, thanks for your interest!" },
            { from: "me", text: "I’d love to know more about your growth plans." },
            { from: "them", text: "We’re scaling in Q4 and open to investors." },
        ],
    },
    {
        id: "2",
        name: "GreenWorks Energy",
        lastMessage: "Can we set up a call next week?",
        time: "9:18 AM",
        avatar: "https://i.pravatar.cc/150?img=12",
        messages: [
            { from: "me", text: "Your mission sounds exciting!" },
            { from: "them", text: "Thanks! We aim to revolutionize solar tech." },
        ],
    },
];

type Chat = {
    id: string;
    name: string;
    lastMessage: string;
    time: string;
    avatar: string;
    messages: { from: string; text: string }[];
};

const InvestorMessages = () => {
    const [selectedChat, setSelectedChat] = useState<Chat | null>(dummyChats[0] ?? null);
    const [message, setMessage] = useState("");
    const [reporting, setReporting] = useState(false);

    const sendMessage = () => {
        if (message.trim() === "") return;
        if (!selectedChat) return;
        const updated: Chat = {
            ...selectedChat,
            messages: [...selectedChat.messages, { from: "me", text: message }],
            lastMessage: message,
            time: "Just now",
        };
        setSelectedChat(updated);
        setMessage("");
    };

    return (
        <div className="flex flex-col md:flex-row h-[85vh] m-2 rounded-2xl shadow-md overflow-hidden">
            <div className="w-full md:w-1/3 border-r bg-white p-4 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Messages</h2>
                    <div className="bg-white p-2 rounded-xl shadow-sm">
                        <Search className="w-4 h-4 text-gray-600" />
                    </div>
                </div>

                <div className="space-y-2 overflow-y-auto scrollbar-none">
                    {dummyChats.map((chat) => (
                        <motion.div
                            key={chat.id}
                            onClick={() => setSelectedChat(chat)}
                            whileHover={{ scale: 1.02 }}
                            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                                selectedChat?.id === chat.id
                                    ? "bg-blue-100 border border-blue-300 shadow-sm"
                                    : "hover:bg-gray-100"
                            }`}
                        >
                            <img
                                src={chat.avatar}
                                alt={chat.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-800 truncate">{chat.name}</p>
                                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                            </div>
                            <span className="text-xs text-gray-400 whitespace-nowrap">
                                {chat.time}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedChat ? (
                <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between p-4 border-b bg-white sticky top-0 z-10">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setSelectedChat(null)}
                                className="md:hidden text-gray-600"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <img
                                src={selectedChat.avatar}
                                alt={selectedChat.name}
                                className="w-10 h-10 rounded-full border border-gray-200"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">
                                    {selectedChat.name}
                                </p>
                                <p className="text-xs text-green-500">● Active now</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setReporting(true)}
                                className="flex items-center text-sm text-red-600 hover:text-red-700 transition"
                            >
                                <AlertTriangle className="w-4 h-4 mr-1" /> Report
                            </button>
                            <div className="bg-gray-100 p-2 rounded-lg">
                                <MoreVertical className="w-5 h-5 text-gray-500" />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        {selectedChat.messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                className={`flex ${
                                    msg.from === "me" ? "justify-end" : "justify-start"
                                }`}
                            >
                                <div
                                    className={`px-4 py-2 rounded-2xl max-w-xs text-sm shadow-sm ${
                                        msg.from === "me"
                                            ? "bg-blue-700 text-white rounded-br-none"
                                            : "bg-white border rounded-bl-none text-gray-800"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="p-4 border-t bg-white flex items-center gap-2">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 p-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-800 transition shadow-sm"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex-1 hidden md:flex items-center justify-center text-gray-400 text-sm">
                    Select a chat to view messages 💬
                </div>
            )}

            {reporting && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl p-6 w-[90%] md:w-1/3 shadow-lg"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            Report Conversation
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Please describe why you’re reporting this conversation.
                        </p>
                        <textarea
                            placeholder="Write your reason..."
                            className="w-full border rounded-xl p-3 text-sm h-24 focus:ring-2 focus:ring-red-500 outline-none"
                        />
                        <div className="flex justify-end gap-3 mt-4">
                            <button
                                onClick={() => setReporting(false)}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800"
                            >
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                                Submit Report
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default InvestorMessages;