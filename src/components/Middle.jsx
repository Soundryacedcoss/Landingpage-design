import React from "react";
import "./mid.css";
import logo from "../image/Logo.png";
import twitter from "../image/Vector (copy 1).png";
import insta from "../image/instagram.png";
import linkdin from "../image/Vector (copy 2).png";
import vector1 from "../image/Group 3.png";
import vector2 from "../image/Group 3 (copy 1).png";
import pexel from "../image/Vector (copy 3).png";
import vector3 from "../image/Vector (copy 4).png";
import vector4 from "../image/Vector (copy 5).png";
import arrow from "../image/Vector (copy 6).png";
export const Middle = () => {
  return (
    <div className="Mid_container">
      <div className="top">
        <div className="top_Left">
          <div className="logo_text">
            <img src={logo} alt="" />
            <div>
              <p className="vectorFlow vectorwidth">VictorFlow</p>
              <p className="logo__text">Webflow Design & Development Agency</p>
            </div>
          </div>
          <p className="Follow">Follow Us</p>
          <div className="logo_text">
            <img className="width" src={insta} alt="" />
            <div>
              <p className="Follow_title">
                Instagram <img src={arrow} alt="" />
              </p>
              <p className="follow_txt">
                Join our Instagram page, We share UI/UX Design tips.
              </p>
            </div>
          </div>
          <div className="logo_text">
            <img className="width" src={twitter} alt="" />
            <div>
              <p className="Follow_title">
                Twitter
                <img src={arrow} alt="" />
              </p>
              <p className="follow_txt">
                Join our Twitter page, We share UI/UX Design tips.
              </p>
            </div>
          </div>
          <div className="logo_text">
            <img className="width" src={linkdin} alt="" />
            <div>
              <p className="Follow_title">
                LinkdIn
                <img src={arrow} alt="" />
              </p>
              <p className="follow_txt">
                Join our Linkedin page, We share UI/UX Design tips.
              </p>
            </div>
          </div>
        </div>
        <div className="top_right">
          <span className="file_info">File Info</span>
          <div className="figma_file">
            <div className="logo_text">
              <img className="width" src={vector1} alt="" />
              <div>
                <p className="figma_file_title">Figma File for FREE</p>
                <p className="figma_file_txt">
                  It is free to use for personal and commercial purposes.
                </p>
              </div>
            </div>
            <div className="logo_text">
              <img className="width" src={vector2} alt="" />
              <div>
                <p className="figma_file_title">Webflow</p>
                <p className="figma_file_txt">
                  The complete design is available as a Webflow template.
                </p>
              </div>
            </div>
            <button className="button">Get Template $79 USD</button>
          </div>
        </div>
      </div>
      <div className="Bottom">
        <div className="left" style={{ width: "400px" }}>
          <span className="file_info">Images</span>
          <div style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", columnGap: "2%" }}>
              <img src={pexel} alt="" />
              <span className="file_info_title">
                Pexels
                <img src={arrow} alt="" />
              </span>
            </div>
            <p className="file_info_txt">
              You can check the licenses and download the images for free on
              <b style={{ color: "black", marginLeft: "1%" }}>Pexels</b>
            </p>
          </div>
          <div style={{ marginTop: "15%" }}>
            <div style={{ display: "flex", columnGap: "2%" }}>
              <img src={vector4} alt="" />
              <span className="file_info_title">
                Unsplash
                <img src={arrow} alt="" />
              </span>
            </div>
            <p className="file_info_txt">
              You can check the licenses and download the images for free on
              <b style={{ color: "black", marginLeft: "1%" }}>Unsplash</b>
            </p>
          </div>
        </div>
        <div className="Right">
          <span className="file_info">Fonts</span>
          <div style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", columnGap: "2%" }}>
              <img src={vector3} alt="" />
              <span className="file_info_title">
                Cardo
                <img src={arrow} alt="" />
              </span>
            </div>
            <p className="file_info_txt">
              Pages Book Website Template uses free licensed
              <b style={{ color: "black", marginLeft: "1%" }}>Google Fonts.</b>
            </p>
          </div>
          <div style={{ marginTop: "15%" }}>
            <div style={{ display: "flex", columnGap: "2%" }}>
              <img src={vector3} alt="" />
              <span className="file_info_title">
                Inter
                <img src={arrow} alt="" />
              </span>
            </div>
            <p className="file_info_txt">
              Pages Book Website Template uses free licensed
              <b style={{ color: "black", marginLeft: "1%" }}>Google Fonts.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
