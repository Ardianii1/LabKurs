import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Stafi from "./pages/Stafi";
import { Departamenti } from "./pages/Departamenti";
import Header from "./pages/Header";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { News } from "./pages/News";
import { Policesite } from "./pages/Policesite";
import { Oraretepunes } from "./pages/Oraretepunes";
import { Qytetaret } from "./pages/Qytetaret";
import Register from "./pages/Register";
import Login from "./pages/Login";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [navigate, setNavigate] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const content = await response.json();
      setNavigate(true);

      setName(content.name);
    })();
  });

  if (navigate) {
    return <Navigate to="/pages/login" />;
  }
  return (
    <BrowserRouter>
      <div className="App container">
        <div>
          <Header name={name} setName={setName} />
        </div>

        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="pages/about" element={<About />}></Route>
          <Route path="pages/services" element={<Services />}></Route>
          <Route path="pages/stafi" element={<Stafi />}></Route>
          <Route path="pages/departamenti" element={<Departamenti />}></Route>
          <Route path="pages/news" element={<News />}></Route>
          <Route path="pages/policesite" element={<Policesite />}></Route>
          <Route path="pages/oraretepunes" element={<Oraretepunes />}></Route>
          <Route path="pages/qytetaret" element={<Qytetaret />}></Route>
          <Route path="pages/register" element={<Register />}></Route>
          <Route path="pages/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
