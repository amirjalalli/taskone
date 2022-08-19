import React, { useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import isLogin from "./../utiles";
import { Ref } from "react";

const Loigin = ({ user, setUser, currentLogin, setCurrentLogin }) => {
  const ref = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
  };
  console.log(setUser);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user?.username}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            value={user?.password}
          />
        </div>
        <button type="button">login</button>

        <Link to="/home">home</Link>
      </form>
    </div>
  );
};

export default Loigin;
