// src/components/WelcomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const WelcomePage = () => {
  const history = useNavigate();

  const navigateToLogin = () => {
    history("/login");
  };

  const navigateToSignUp = () => {
    history("/sign-up");
  };

  return (
    <div className="bg-welcome-page">
      <h1>Welcome to Our Application</h1>
      <button onClick={navigateToLogin}>Login</button>
      <button onClick={navigateToSignUp}>Sign Up</button>
    </div>
  );
};

export default WelcomePage;
