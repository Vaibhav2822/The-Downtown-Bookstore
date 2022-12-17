import React from "react";
import { useState } from "react";
import { useNavigate} from 'react-router-dom'
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signupBtn = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    if (name.length == 0 || email.length == 0 || password.length == 0) {
      alert("Please enter all the fields");
    } else {
      if (
        result.email === undefined ||
        result.name === undefined ||
        result.password === undefined
      ) {
        alert("User already exist");
      } else {
        localStorage.setItem("user", JSON.stringify(result));
        alert("User Signed up  successfully")
        navigate("/home")
      }
    }
  };
  return (
    <div className="SignUp-Template">
      <h1 className="Signup">Signup</h1>
      <input
        className="input-fields"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input-fields"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input-fields"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button onClick={signupBtn} className="signUpBtn">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
