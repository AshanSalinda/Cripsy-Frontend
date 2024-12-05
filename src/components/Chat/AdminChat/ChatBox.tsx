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
            sender: "Admin",
            message: newMessage,
        };

        try {
            const newMsg = await axios.post('http://localhost:8085/api/messages/create', messageData);
            setMessages((prev) => [...prev, newMsg]);
            setNewMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const formatDateTime = (dateTime) => {
        const date = new Date(dateTime);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}.${minutes}`;
    };

    return (
        <div className="flex flex-col w-full h-full bg-white rounded-lg shadow-lg">
            <div className="bg-[#FD5E5D] text-white p-4 rounded-t-lg mb-5">
                <h3 className="text-lg font-semibold pl-4">
                    {customerName || 'Select a conversation'}
                </h3>
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
                            className={`p-3 rounded-lg max-w-[25em] break-words ${
                                msg.sender === 'Admin'
                                    ? 'bg-gradient-to-r from-[#ff9291] to-[#ed6f6d] text-white text-right mr-1'
                                    : 'bg-gradient-to-r from-[#fa8d48] to-[#faa46e] text-white text-left ml-1'
                            }`}
                        >
                            <p className="text-sm">{msg.message}</p>
                            <span
                                className={`text-[0.625em] mt-1 block ${
                                    msg.sender === 'Admin' ? 'text-gray-200' : 'text-gray-200'
                                }`}
                            >
                                {formatDateTime(msg.dateTime)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="p-4 border-t border-gray-200 flex items-center">
                <InputEmoji
                    value={newMessage}
                    onChange={handleChange}
                    placeholder="Type a message..."
                />
                <button
                    onClick={handleSend}
                    className="ml-2 px-6 py-2 bg-[#FD5E5D] text-white rounded-lg shadow hover:bg-[#ff4e4d] text-sm"
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
