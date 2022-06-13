// import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/Home";
import Stafi from "./pages/Stafi";
import { Departamenti } from "./pages/Departamenti";
import { Header } from "./pages/Header";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { News } from "./pages/News";
import { Policesite } from "./pages/Policesite";
import { Oraretepunes } from "./pages/Oraretepunes";
import { Qytetaret } from "./pages/Qytetaret";
import Signup from "./pages/Signup";
// import { Login } from "./login/Login";

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <div>
          <Header />
        </div>

        <Routes>
          <Route path="pages/home" element={<Home />}></Route>
          <Route path="pages/about" element={<About />}></Route>
          <Route path="pages/services" element={<Services />}></Route>
          <Route path="pages/stafi" element={<Stafi />}></Route>
          <Route path="pages/departamenti" element={<Departamenti />}></Route>
          <Route path="pages/news" element={<News />}></Route>
          <Route path="pages/policesite" element={<Policesite />}></Route>
          <Route path="pages/oraretepunes" element={<Oraretepunes />}></Route>
          <Route path="pages/qytetaret" element={<Qytetaret />}></Route>
          <Route path="pages/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
