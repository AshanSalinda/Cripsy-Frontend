'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChatBox from './ChatBox';

const ChatList = () => {
    const [conversations, setConversations] = useState<any[]>([]);
    const [selectedConversationId, setSelectedConversationId] = useState<number | null>(null);
    const [selectedCustomerName, setSelectedCustomerName] = useState<string | null>(null);

    useEffect(() => {
        const fetchConversations = async () => {
            try {
                const response = await axios.get('http://localhost:8085/api/conversations');
                setConversations(response.data);
            } catch (error) {
                console.error("Error fetching conversations: ", error);
            }
        };

        fetchConversations();
    }, []);

    const handleClick = (conversationId: number, customerName: string) => {
        setSelectedConversationId(conversationId);
        setSelectedCustomerName(customerName);
    };

    return (
        <div className="flex h-full">
            <div className="w-96 p-4 pt-8 bg-gray-100 rounded-2xl">
                <div className="text-center mb-4">
                    <h5 className="text-xl font-semibold">Customer Chat</h5>
                </div>
                <div className="h-full rounded-lg">
                    <div className="h-full overflow-y-auto p-2 space-y-4">
                        {conversations.map((conversation) => (
                            <div
                                key={conversation.conversationId}
                                className="bg-white p-4 border-b-2 border-b-gray-300 rounded-2xl shadow-lg cursor-pointer transform transition-all duration-200 hover:scale-105"
                                onClick={() =>
                                    handleClick(conversation.conversationId, conversation.customerName)
                                }
                            >
                                <div className="text-sm text-gray-500">
                                    Customer ID: {conversation.customerId}
                                </div>
                                <div
                                    className="text-lg font-semibold"
                                    style={{ color: '#FD5E5D' }}
                                >
                                    {conversation.customerName || 'Unknown Customer'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="flex-1 h-full min-w-[68.75em] ml-6">
                <ChatBox
                    conversationId={selectedConversationId}
                    customerName={selectedCustomerName}
                    currentUser="admin"
                    isAdmin={true}
                />
            </div>
        </div>
    );
};

export default ChatList;
