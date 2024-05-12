import React, { useState } from "react";
import "../styles/LoginForm.css"

function LoginForm () {

    const[loginData, setLoginData] = useState({userId: "", password : ""})

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('my_backend_api_url', {
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(loginData)
            });
            const data = await response.json();
            console.log("Login response data : ", data) //handle response data from backend.
        } catch (error) {
            console.error("login error : ", error);
        }
    }

    return (
        <div class="login-container">
            <form class="login-form" onSubmit={handleLoginSubmit}>
                 <h1>Welcome Back!</h1>
                 <input 
                    type="text" 
                    placeholder="Enter userId"
                    value={loginData.userId}
                    onChange={(e) => setLoginData({ ...loginData, userId: e.target.value })}
                 />

                 <input 
                    type="password"
                    placeholder="Enter password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                 />
                 <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;