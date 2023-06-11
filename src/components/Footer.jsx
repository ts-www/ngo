import React from "react";
import { AiOutlineSketch } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <div>
          <AiOutlineSketch />
        </div>
        <div>Mission</div>
        <div>Impact</div>
        <div>About</div>
      </div>
      <div className="email">
        <BsEnvelope />
        <p>email@address.com</p>
      </div>
      <div className="email">
        <BsWhatsapp />
        <p>+268 7612 3456</p>
      </div>
      <div className="socials">
        <div><FiFacebook/></div>
        <div><FaInstagram/></div>
        <div><FiTwitter/></div>
      </div>
      <div className="copyrights">
        <p>copyrights 2023</p>
      </div>
    </div>
  );
};

export default Footer;
