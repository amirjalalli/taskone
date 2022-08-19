import "./App.css";

import { Routes, Route, useRoutes } from "react-router-dom";

import routes from "./Router";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <div className="App">{router}</div>
    </>
  );
}

export default App;
