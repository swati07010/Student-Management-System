import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/home");
    }
  }, []);
  const loginhandel = async () => {
    console.warn({ email, password });
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/home");
    } else {
      alert("Please Enter Correct details");
    }
  };

  return (
    <div className="login">
      <h1 className="deco">Login:</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="inputBox"
        placeholder="Enter Email"
      ></input>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="inputBox"
        placeholder="Enter Password"
      ></input>
      <button className="button1" type="button" onClick={loginhandel}>
        Login
      </button>
    </div>
  );
};
export default Login;
