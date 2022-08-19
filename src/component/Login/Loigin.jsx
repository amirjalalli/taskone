import React, { useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Login.css";

const Loigin = ({ user, setUser, currentLogin, setCurrentLoginfuc }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [isLogin, setIsLogin] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;
    if (username === "admin" && password === "admin") {
      setIsLogin(true);
    } else {
      alert("is not valid");
    }

    console.log(username, password);
  };
  console.log("user", user);

  return (
    // <div className="login-content">
    //   <form onSubmit={submitHandler} className="form-content">
    //     <div className="div-form">
    //       <label htmlFor="username">username</label>
    //       <input type="text" id="username" name="username" ref={usernameRef} />
    //     </div>
    //     <div className="div-form">
    //       <label htmlFor="password">Password</label>
    //       <input type="text" id="password" name="password" ref={passwordRef} />
    //     </div>
    //     <button type="submit">{isLogin && <Navigate to="home" />}login</button>
    //   </form>
    // </div>
    <div className="login-form" onSubmit={submitHandler}>
      <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input
          className="form-input"
          type="text"
          id="username"
          name="username"
          ref={usernameRef}
        />

        <label for="password">Password</label>
        <input
          className="form-input"
          type="text"
          id="password"
          name="password"
          ref={passwordRef}
        />

        <button className="form-btn" type="submit">
          {isLogin && <Navigate to="home" />}login
        </button>
      </form>
    </div>
  );
};

export default Loigin;
