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
  console.log(setUser);

  return (
    <>
      {currentLogin ? (
        <Outlet />
      ) : (
        <Loigin
          user={user}
          setUser={setUser}
          currentLogin={currentLogin}
          setCurrentLogin={setCurrentLogin}
        />
      )}
    </>
  );
};

export default PrivetRoute;
