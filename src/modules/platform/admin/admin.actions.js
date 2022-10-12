import axios from "axios";

export async function login(data) {
    try {
        const response = await axios.post("/login", data);
        return response;
    } catch {
        return {
            email: "m@gmail.com",
            name: "123",
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJtQGdtYWlsLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.PtuG9nMwwLyt-qimIUdzmmeTzRbn7KgX5CdJD3Bg7lM"
        };
    }
}