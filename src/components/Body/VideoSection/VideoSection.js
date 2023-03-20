import React from "react";
import video from "../../../Video/backgroundVid.mp4";
import "./VideoSection.css";

function VideoSection() {
  return (
    <div className="main" id="home">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted />
      <div className="content">
//         <h1 className="content-h1">Family-Owned Company</h1>
        <div className="content-paragraph__div">
          <p className="content-paragraph">
            We Are Dedicated To Interior Remodeling Services In The South
            Florida Area. We Have Over 20 Years Of Experience In This Industry.
            Kitchen Designs Are Made To Maximum Expectations. Bathrooms Are
            Designed With Comfort And Style In Mind. Best Quality Work In The
            Industry With Competitive Pricing.
          </p>
        </div>
        <div className="contact-button">
          <a className="anchortag" href="#contact">
            <button type="button" className="contact-us__button">
              Contact Us!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default VideoSection;
