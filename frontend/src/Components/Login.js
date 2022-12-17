import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();
    const login = async () => {
        let result = await fetch('http://localhost:5000/login',{
           method: 'POST',
           body: JSON.stringify({email,password}),
           headers: {'Content-Type': 'application/json'}
        })
        if(email.length === 0 || password.length === 0){
            alert("Please enter all the fields");
        }else{
            result = await result.json();
            if(result.result === "Please register first"){  
                alert("Please register first")
            }else{
                localStorage.setItem("user",JSON.stringify(result));
                let user = localStorage.getItem("user");    
                alert("Logged In Successfully")
                window.history.pushState('page','title','/home')
                navigate("/home")
            }
        }
    }
    return(
        <div className="login-Template">
           <h1 className="loginText" >Login</h1>
           <input
                className="login-input-fields"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
           />
           <input
                className="login-input-fields"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div>
            <button onClick={login} className="loginBtn">
                Login
            </button>
            </div>
        </div>
    )
}

export default Login;