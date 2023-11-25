import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Simulated hardcoded users (in a real app, use a database or API)
const hardcodedUsers = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
];

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const foundUser = hardcodedUsers.find((user) => user.username === username && user.password === password);

        if (foundUser) {
            console.log("Login successful");
            Cookies.set(
                "accessToken",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE3MDEyNDg2NTd9.quekNp4h2MRMOf8PBL2Iy4xdin7OETqhO84TjL88T3k"
            );
            navigate("/");
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}
            >
                <div>
                    <label>Korisnicko ime:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Sifra:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Prijavi se</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;
