import axios from "axios";

export async function post(endpoint: string, data: Object) {
    try {
        const response = await axios
            .post(endpoint, data);
        return response;
    } catch (error) {
        return await Promise.reject(error);
    }
}