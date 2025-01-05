import React from "react";
import { Outlet } from "react-router-dom";
import LandingMedia from "../components/landing/LandingMedia/LandingMedia";

const LandingLayout = () => {
  return (
    <div className="landing-layout">
      <LandingMedia />
      <Outlet />
    </div>
  );
};

export default LandingLayout;
