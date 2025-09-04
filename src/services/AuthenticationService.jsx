import axios from "axios";
import ApiContents from "~/contants/ApiContents";

const AuthRequest = axios.create({
    baseURL: ApiContents.BACKEND_API.BASE_APP_URL,
})


const register = async (user) => {
    if (!user?.username || !user?.email || !user?.password) {
        return { status: false, message: "Please fill up all fields" }
    } 

    try {
        let requestBody = {
            username: user?.username,
            email: user?.email,
            password: user?.password,
        }

        let requestResponse = await AuthRequest.post(ApiContents.BACKEND_API.REGISTER, requestBody);

        console.log(requestResponse?.data);
        return requestResponse?.data;
        
    } catch (error) {
        console.log(error);
        return {status: false, message: "Opps! Something went wrong!"}
    }
}

const login = async (user) => {
    if (!user?.email || !user?.password) {
        return { status: false, message: "Please fill up all fields" }
    } 

    try {
        let requestBody = {
            email: user?.email,
            password: user?.password,
        }

        let requestResponse = await AuthRequest.post(ApiContents.BACKEND_API.LOGIN, requestBody);

        console.log(requestResponse?.data);
        return requestResponse?.data;
        
    } catch (error) {
        console.log(error);
        return {status: false, message: "Opps! Something went wrong!"}
    }
}

const checkUserExist = async (type, value) => {  

    try {
        let params = {[type]:value}

        let userCheckResponse = await AuthRequest.post(ApiContents.BACKEND_API.USER_EXIST, params);

        console.log(userCheckResponse?.data);
        return userCheckResponse?.data;
        
    } catch (error) {
        console.log(error);
        return {status: false, message: "Opps! Something went wrong!"}
    }
}

export default {register, login, checkUserExist}