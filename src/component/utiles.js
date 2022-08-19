const isLogin = (username, password) => {
  if (username === "admin" && password === "admin") {
    return true;
  } else {
    return false;
  }
};

export default isLogin;
