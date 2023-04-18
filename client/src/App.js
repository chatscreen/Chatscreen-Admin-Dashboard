import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Chat from "./pages/chat/Chat";
import ContentFilter from "./pages/contentFilter/ContentFilter";
import QrCode from "./pages/qrCode/QrCode";
import Profile from "./pages/profile/Profile";
import About from "./pages/about/About";
import Login from "./pages/login/Login";

//app css
import "./App.css";

//navigational components
import Navigation from "./shared/components/Navigation/Navigation";
import DropDown from "./shared/components/DropDown/DropDown";

//if user is not logged in the login page is rendered, otherwise the navbar and current page is rendered

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    console.log("running isauth");
    try {
      const response = await fetch("http://localhost:5000/auth/adminVerify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();
      console.log(parseRes);
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth();
  });

  return (
    <div>
      {!isAuthenticated ? (
        <Login setAuth={setAuth} />
      ) : (
        <Router>
          <Navigation />
          <DropDown setAuth={setAuth} />
          <main className="main">
            <Routes>
              <Route path="/" element={<Chat />} />
              <Route path="/contentFilter" element={<ContentFilter />} />
              <Route path="/qrCode" element={<QrCode />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </Router>
      )}
    </div>
  );
};

export default App;
