import axios from "axios";

export async function login(data) {
    try {
        const response = await axios.post("/login", data);
        return response;
    } catch {
        return {
            email: "s@gmail.com",
            name: "ABC"
        };
    }
}