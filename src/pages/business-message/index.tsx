import { useState } from "react";
import { MessageCircle, Send, Search, MoreVertical, Flag } from "lucide-react";

interface ChatUser {
    id: number;
    name: string;
    lastMessage: string;
    time: string;
    unread?: number;
}

interface Message {
    id: number;
    sender: "business" | "investor";
    content: string;
    time: string;
}

const BusinessMessages = () => {
    const [selectedChat, setSelectedChat] = useState<number | null>(0);
    const [newMessage, setNewMessage] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [showReport, setShowReport] = useState(false);

    const chatUsers: ChatUser[] = [
        { id: 1, name: "John Smith", lastMessage: "Looking forward to your pitch deck.", time: "2m ago", unread: 2 },
        { id: 2, name: "Ava Johnson", lastMessage: "Thanks for the update!", time: "1h ago" },
        { id: 3, name: "David Brown", lastMessage: "Let's schedule a call tomorrow.", time: "3h ago" },
        { id: 4, name: "Sofia Lee", lastMessage: "I like your growth model.", time: "Yesterday" },
        { id: 5, name: "Michael Adams", lastMessage: "When can we meet?", time: "2 days ago" },
    ];

    const messages: Record<number, Message[]> = {
        1: [
            { id: 1, sender: "investor", content: "Hi, I saw your SeedConnect profile.", time: "09:20" },
            { id: 2, sender: "business", content: "Hello! Glad to connect.", time: "09:22" },
            { id: 3, sender: "investor", content: "Could you share your pitch deck?", time: "09:25" },
            { id: 4, sender: "business", content: "Sure, I'll send it right after this.", time: "09:28" },
        ],
        2: [
            { id: 1, sender: "investor", content: "Appreciate your quick response!", time: "14:45" },
            { id: 2, sender: "business", content: "Always happy to help!", time: "14:50" },
            { id: 3, sender: "investor", content: "Can we discuss funding milestones?", time: "14:55" },
        ],
        3: [
            { id: 1, sender: "investor", content: "Let's schedule a call tomorrow.", time: "11:15" },
            { id: 2, sender: "business", content: "Tomorrow works for me!", time: "11:17" },
        ],
        4: [
            { id: 1, sender: "investor", content: "I like your growth model.", time: "09:00" },
            { id: 2, sender: "business", content: "Thank you! We're scaling sustainably.", time: "09:05" },
        ],
        5: [
            { id: 1, sender: "investor", content: "When can we meet?", time: "08:40" },
            { id: 2, sender: "business", content: "I'm available this Friday afternoon.", time: "08:45" },
        ],
    };

    const filteredChats = chatUsers.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSend = () => {
        if (!newMessage.trim() || !selectedChat) return;
        messages[selectedChat].push({
            id: messages[selectedChat].length + 1,
            sender: "business",
            content: newMessage,
            time: "Now",
        });
        setNewMessage("");
    };

    const activeMessages = selectedChat ? messages[selectedChat] || [] : [];

    const handleReport = () => {
        setShowReport(false);
        alert("This chat has been reported to the SeedConnect support team.");
    };

    return (
        <div className="p-6">
            <div className="flex h-[calc(100vh-130px)] shadow rounded-xl overflow-hidden border" style={{ borderColor: "#d9d9d9" }}>
                <div className="w-1/3 border-r bg-gray-50 flex flex-col" style={{ borderColor: "#d9d9d9" }}>
                    <div className="p-4 border-b" style={{ borderColor: "#d9d9d9" }}>
                        <h2 className="text-xl font-bold text-blue-700 mb-2">Messages</h2>
                        <div className="relative">
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search chats"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                style={{ borderColor: "#d9d9d9" }}
                            />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {filteredChats.length > 0 ? (
                            filteredChats.map((user) => (
                                <div
                                    key={user.id}
                                    onClick={() => setSelectedChat(user.id)}
                                    className={`flex items-center justify-between p-4 cursor-pointer hover:bg-blue-50 border-b transition ${
                                        selectedChat === user.id ? "bg-blue-100" : ""
                                    }`}
                                    style={{ borderColor: "#d9d9d9" }}
                                >
                                    <div>
                                        <p className="font-semibold text-gray-800">{user.name}</p>
                                        <p className="text-sm text-gray-500 truncate max-w-[180px]">
                                            {user.lastMessage}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400">{user.time}</p>
                                        {user.unread && (
                                            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                                                {user.unread}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center py-6">No chats found</p>
                        )}
                    </div>
                </div>

                <div className="flex-1 flex flex-col">
                    {selectedChat ? (
                        <>
                            <div
                                className="p-4 border-b flex items-center justify-between bg-white"
                                style={{ borderColor: "#d9d9d9" }}
                            >
                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        {chatUsers.find((u) => u.id === selectedChat)?.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">Active now</p>
                                </div>
                                <div className="relative">
                                    <MoreVertical
                                        className="text-gray-600 cursor-pointer hover:text-blue-600"
                                        size={22}
                                        onClick={() => setShowReport((prev) => !prev)}
                                    />
                                    {showReport && (
                                        <div
                                            className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10"
                                            style={{ borderColor: "#d9d9d9" }}
                                        >
                                            <button
                                                onClick={handleReport}
                                                className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left"
                                            >
                                                <Flag size={16} /> Report Chat
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-gray-50">
                                {activeMessages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${
                                            msg.sender === "business" ? "justify-end" : "justify-start"
                                        }`}
                                    >
                                        <div
                                            className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl shadow ${
                                                msg.sender === "business"
                                                    ? "bg-blue-600 text-white rounded-br-none"
                                                    : "bg-white text-gray-800 rounded-bl-none"
                                            }`}
                                            style={{ borderColor: "#d9d9d9" }}
                                        >
                                            <p>{msg.content}</p>
                                            <span className="block text-xs mt-1 opacity-70">
                                                {msg.time}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="p-4 border-t flex items-center bg-white"
                                style={{ borderColor: "#d9d9d9" }}
                            >
                                <input
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    style={{ borderColor: "#d9d9d9" }}
                                />
                                <button
                                    onClick={handleSend}
                                    className="ml-3 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-gray-500">
                            Select a chat to start messaging
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BusinessMessages;