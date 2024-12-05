import React from 'react'
import ChatList from "@/components/Chat/CustomerChat/ChatList";

const Page = () => {
    return(
        <div className="flex h-full">
            <div className='h-full overflow-y-hidden'>
                <ChatList></ChatList>
            </div>
            {/*<div className='h-full overflow-y-hidden'>
                <ChatBox></ChatBox>
            </div>*/}
        </div>
    )
}

export default Page;
