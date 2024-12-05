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
        <div className="flex h-full pt-8 pb-4">
            <div className="w-96 rounded-2xl pr-2 pl-2 pt-[3em] ml-6 mr-8">
                {/*<div className="text-center mb-4">
                    <h5 className="text-l font-semibold">Customer Chat</h5>
                </div>*/}
                <img
                    src="/customer_support.gif"
                    alt="Customer Support"
                    className="w-96 h-auto mt-2"
                />
            </div>


            <div className="flex-1 h-full min-w-[60.75em] ml-6">
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
