import React from "react";
import "./Hero.css";
import circle1 from "../image/Ellipse 32.png";
import circle2 from "../image/Ellipse 33.png";
import heroImage from "../image/Images.png";
import logo from "../image/Logo (copy 1).png";
export const Hero = () => {
  return (
    <div className="hero">
      <span style={{ float: "left" }}>
        <img src={circle1} alt="" />
      </span>
      <span style={{ float: "left", marginTop: "90px" }}>
        <img src={circle2} alt="" />
      </span>
      <div className="hero__logo">
        <img className="hero__logo__img" src={logo} alt="" />
      </div>
      <p className="hero__title">Book Website Template</p>
      <p className="hero__txt">
        Pages is a professional author bookstore Webflow template bundled with a
        bunch of unique layouts. Impressive interface and practical sections put
        all the creative power right in your hands to publish your masterpiece.
      </p>
      <img src={heroImage} className="hero__img" alt="" />
    </div>
  );
};
