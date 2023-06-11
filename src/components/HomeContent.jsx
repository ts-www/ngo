import React from "react";
import handshake from "./images/handshake.png"
import avatar from "./images/avatar.png"
import nucleus from "./images/nucleus.png"
import target from "./images/target.png"
import savemoney from "./images/save-money.png"
import studentscap from "./images/students-cap.png"
import grad from "./images/grad.jpg"



const HomeContent = () => {
  return (
    <div>
      <div className="hero">
        <div>
          <h1>TITLE AND STATEMENT</h1>
          <p>Some text about organization</p>
        </div>
        <button className="donate-btn">DONATE</button>
      </div>
      <div className="sponsors">
        <h4>Sponsors.</h4>
        <div className="spons-icons">
          <div className="spons-icon"><img src={nucleus} alt="icon"/></div>
          <div className="spons-icon"><img src={avatar} alt="icon"/></div>
          <div className="spons-icon"><img src={target} alt="icon"/></div>
          <div className="spons-icon"><img src={handshake} alt="icon"/></div>
        </div>
      </div>
      <div className="banner-con">
        <div className="banner-text">
          <h1>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quae!.</h1>
        </div>
        <div className="banner-img">
          <img className="grad-img" src={grad} alt="img"/>
        </div>
      </div>
      <div className="stats">
        <div className="stat">
          <div className="num">
            <h3>100+</h3>
          </div>
          <div className="static">
            <h4>FUNDS</h4>
          </div>
        </div>
        <div className="stat">
          <div className="num">
            <h3>100+</h3>
          </div>
          <div className="static">
            <h4>STUDENTS</h4>
          </div>
        </div>
        <div className="stat">
          <div className="num">
            <h3>100+</h3>
          </div>
          <div className="static">
            <h4>SPONSORS</h4>
          </div>
        </div>
      </div>
      <div className="engage">
        <p>GET INVOLVED</p>
        <h2>Lorem ipsum dolor sit.</h2>
      </div>
      <div className="how-to-con">
        <div className="how-to">
          <img className="icon" src={studentscap} alt="icon"/>
          <h3>APPLY FOR SCHOLARSHIP</h3>
          <p>Apply and change your life</p>
          <button className="apply-btn">Apply</button>
        </div>
        <div className="how-to">
          <img className="icon" src={savemoney} alt="icon"/>
          <h3>BECOME A SPONSOR</h3>
          <p>Let us make a difference together</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
