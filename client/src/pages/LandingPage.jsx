import React from "react";
import { useLocation } from "react-router-dom";
import LoginForm from "../components/landing/LoginForm/LoginForm";
import RegistrationForm from "../components/landing/RegistrationForm/RegistrationForm";
import LogoRect from "../assets/images/logos/logo-rect.png";
import ResetForm from "../components/landing/ResetForm/ResetForm";

const LandingPage = () => {
  const currentUrl = useLocation();
  let formElement;
  switch (currentUrl.pathname) {
    case "/":
      formElement = <LoginForm />;
      break;
    case "/register":
      formElement = <RegistrationForm />;
      break;
    case "/reset":
      formElement = <ResetForm />;
      break;
  }
  return (
    <div className="login-form-container">
      <img src={LogoRect} alt="Momentum logo" />
      {formElement}
    </div>
  );
};

export default LandingPage;
