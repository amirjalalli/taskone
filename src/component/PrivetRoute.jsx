import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Loigin from "./Login/Loigin";
import isLogin from "./utiles";

const PrivetRoute = () => {
  const [currentLogin, setCurrentLogin] = useState(true);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const setCurrentLoginfuc = (parm) => {
    setCurrentLogin();
  };
  return (
    <>
      {currentLogin ? (
        <Outlet />
      ) : (
        <Loigin
          user={user}
          setUser={setUser}
          currentLogin={currentLogin}
          setCurrentLoginfuc={setCurrentLoginfuc}
        />
      )}
    </>
  );
};

export default PrivetRoute;
