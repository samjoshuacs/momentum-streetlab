import React from "react";
import Gears from "../../../assets/videos/gears.mp4";

const LandingMedia = () => {
  return (
    <div className="landing-media-container">
      <video loop autoPlay muted src={Gears} />
    </div>
  );
};

export default LandingMedia;
