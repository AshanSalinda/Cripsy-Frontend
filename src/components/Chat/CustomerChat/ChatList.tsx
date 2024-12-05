'use client';

import React from 'react';
import ChatBox from './ChatBox';

const ChatList = () => {

    return (
        <div className="flex h-full pt-8 pb-4">
            <div className="w-96 rounded-2xl pr-2 pl-2 pt-[3em] ml-6 mr-8">
                <img
                    src="/customer_support.gif"
                    alt="Customer Support"
                    className="w-96 h-auto mt-2"
                />
            </div>


            <div className="flex-1 h-full min-w-[60.75em] ml-6">
                <ChatBox/>
            </div>
        </div>
    );
};

export default ChatList;
