import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8085"
});

export const createConversation = async (conversationData: {
    adminId: number;
    customerId: number;
})=> {
    try {
        const response = await api.post(`/api/conversations/create`, conversationData);
        if(response.status === 200) {
            console.log("Conversation created successfully: ", response.data);
            return response.data;
        }
    }catch (error) {
        console.log("Error in creating the conversation", error);
        throw error;
    }
};

export const getConversationById = async (conversationId: number) => {
    try {
        const response = await api.get(`/api/conversations/${conversationId}`);
        return response.data;
    }catch (error) {
        console.log("Error in getting the conversation: ", error);
        return {};
    }
}

export const getConversations = async () => {
    try {
        const response = await axios.get(`/api/conversations`);
        return response.data;
    }catch (error) {
        console.log("Error in getting the conversation: ", error);
        throw error;
    }
}

export const deleteConversation = async (conversationId: number) => {
    try {
        const response = await axios.delete(`/api/conversations/delete/${conversationId}`);
        if(response.status === 200) {
            console.log("Conversation successfully deleted");
            return {}
        }
    }catch (error){
        console.log("Error in deleting the conversation: ", error);
        return {};
    }
}

export const createMessage = async (messageData: {
    conversationId: number;
    sender: string;
    message: string;
})=> {
    try {
        const response = await axios.post(`/api/messages/create`, messageData);
        if(response.status === 200) {
            console.log("Message created successfully: ", response.data);
            return response.data;
        }
    }catch (error){
        console.log("Error in creating the conversation", error);
        throw error;
    }
}

export const getMessageById = async (messageId: number)=> {
    try {
        const response = await api.get(`/api/messages/${messageId}`);
        return response.data;
    }catch (error) {
        console.log("Error in getting the message: ", error);
        return {};
    }
}

export const getMessages = async (conversationId: number) => {
    try {
        const response = await axios.get(`/api/messages/getAllMessages/${conversationId}`);
        return response.data;
    }catch (error) {
        console.log("Error in getting the conversation messages: ", error);
        throw error;
    }
}