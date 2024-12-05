'use client';

import React, { useEffect, useState } from 'react';
import InputEmoji from 'react-input-emoji';
import PropTypes from 'prop-types';
import { getMessages, createMessage } from '@/apis/chatApi/chatApi';
import axios from 'axios';

const ChatBox = ({ conversationId, customerName, currentUser, isAdmin }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8085/api/messages/getAllMessages/${conversationId}`
                );
                setMessages(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        if (conversationId) fetchMessages();
    }, [conversationId]);

    const handleChange = (value) => setNewMessage(value);

    const handleSend = async () => {
        if (!newMessage.trim()) return;

        const messageData = {
            conversationId,
            sender: currentUser,
            message: newMessage,
        };

        try {
            const newMsg = await createMessage(messageData);
            setMessages((prev) => [...prev, newMsg]);
            setNewMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="flex flex-col w-full h-full bg-white rounded-lg shadow-lg">

            <div className="bg-black text-white p-4 rounded-t-lg">
                <h3 className="text-lg font-semibold pl-4">{customerName || 'Select a conversation'}</h3>
            </div>


            <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex mb-2 ${
                            msg.sender === 'Admin' ? 'justify-end' : 'justify-start'
                        }`}
                    >
                        <div
                            className={`p-3 rounded-lg max-w-xs ${
                                msg.sender === 'Admin'
                                    ? 'bg-blue-200 text-right'
                                    : 'bg-gray-200 text-left'
                            }`}
                        >
                            <p className="text-sm">{msg.message}</p>
                            <span className="text-xs text-gray-500">
                {new Date(msg.createdAt).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                })}
              </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Section */}
            <div className="p-4 border-t border-gray-200 flex items-center">
                <InputEmoji
                    value={newMessage}
                    onChange={handleChange}
                    placeholder="Type a message..."
                />
                <button
                    onClick={handleSend}
                    className="ml-2 px-6 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-900"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

ChatBox.propTypes = {
    conversationId: PropTypes.number,
    customerName: PropTypes.string,
    currentUser: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
};

export default ChatBox;
