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
    try {
      const response = await fetch("http://localhost:5000/auth/adminVerify", {
        method: "POST",
        headers: { token: localStorage.token },
      });
      let isAdmin = await response.json(); // Wait for the response to be resolved
      if (isAdmin.isAuthenticated === true) {
        setIsAuthenticated(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    isAuth();
  }, [setIsAuthenticated]);

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
