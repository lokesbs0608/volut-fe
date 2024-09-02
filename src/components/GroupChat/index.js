import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useRouter } from 'next/router';

const socket = io();

const GroupChat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const router = useRouter();
    const { chatId } = router.query;

    useEffect(() => {
        if (chatId) {
            socket.emit('joinRoom', chatId);

            socket.on('message', (message) => {
                setMessages((prevMessages) => [...prevMessages, message]);
            });
        }

        return () => {
            socket.off('message');
        };
    }, [chatId]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            socket.emit('sendMessage', { roomId: chatId, text: message });
            setMessage('');
        }
    };

    return (
        <div className="flex flex-col h-screen p-4 bg-gray-100">
            <div className="flex-1 overflow-y-auto p-4 bg-white shadow-md rounded-md">
                <ul className="space-y-2">
                    {messages.map((msg, index) => (
                        <li key={index} className="p-2 border-b border-gray-200">
                            <p className="text-sm text-gray-800">{msg.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <form onSubmit={sendMessage} className="flex items-center mt-4 space-x-2">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message"
                    className="flex-1 p-2 border border-gray-300 rounded-md"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default GroupChat;
