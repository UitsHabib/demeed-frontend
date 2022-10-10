import axios from "axios";

export async function login(data) {
    try {
        const response = await axios.post("http://localhost:4000/api/users/login", data);
        return response;
    } catch (err) {
        console.log(err);
        alert('Internal Server Error.');
    }
}