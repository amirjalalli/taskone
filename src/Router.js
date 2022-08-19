import Loigin from "./component/Login/Loigin";
import Home from "./component/Home";
import PrivetRoute from "./component/PrivetRoute";

let routes = [
  {
    path: "/",
    element: <Loigin />,
  },

  {
    path: "*",
    element: <PrivetRoute />,
    children: [{ path: "home", element: <Home /> }],
  },
];

export default routes;
