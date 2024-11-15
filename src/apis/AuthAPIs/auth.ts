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


export const forgotPassword = async(formData: { email:string; }) => {
    try {
        const response = await api.post(`/forgot-password/verify-mail/${formData.email}`);

        if (response.status === 200) {
            console.log("SignUp Successful:");
            alert("OTP Sent Successfully");
        }
    } catch (error) {
        // setErrors("Invalid username or password.");
        console.error("SignUp failed:", error);
    }
}


export const verifyOTP = async(email:string , otp: string) => {
    try {
        const response = await api.post(`/forgot-password/verify-otp/${otp}/${email}`);

        const url = `/forgot-password/verify-otp/${otp}/${email}`;
        console.log("Request URL: ", url);

        if (response.status === 200) {
            console.log("OTP Verified:");
            alert(response.data);
        }
    } catch (error) {
        console.error("Invalid OTP:", error);
    }
}


export const resetPassword = async(formData: {password: string; confirmPassword:string },  email:string) => {
    console.log(email)
    try {
        const response = await api.post(`/forgot-password/change-password/${email}`, {
            password: formData.password,
            confirmPassword: formData.confirmPassword,
        });

        if (response.status === 200) {
            console.log("Password Reset Successful:");
        }
    } catch (error) {
        // setErrors("Invalid username or password.");
        console.error("Password Reset failed:", error);
    }
}
