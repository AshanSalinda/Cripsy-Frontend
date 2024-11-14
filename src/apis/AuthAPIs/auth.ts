import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

export const userLogin = async(formData: { username: string; password: string; }) => {
    try {
        const response = await api.post("/auth/login", {
            username: formData.username,
            password: formData.password
        });

        if (response.status === 200) {

            const token = response.data;
            localStorage.setItem('accessToken', token);

            console.log("Access Token:",token);
        }
    } catch (error) {
        // setErrors("Invalid username or password.");
        console.error("Login failed:", error);
    }
}



export const userSignUp = async(formData: { username: string; email:string; password: string; confirmPassword:string }) => {
    try {
        const response = await api.post("/auth/signup", {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
        });

        if (response.status === 200) {
            console.log("SignUp Successful:");
        }
    } catch (error) {
        // setErrors("Invalid username or password.");
        console.error("SignUp failed:", error);
    }
}