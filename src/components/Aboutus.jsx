import React from "react";
import portr from "./images/por.jpg"

const AboutUs = () => {
  return (
    <div>
      <div className="about-hero standard-hero">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quia
          sequi numquam atque, debitis fugiat.
        </p>
      </div>
      <div className="goals">
        <div className="goal">
          <h1>GOAL ONE</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, perferendis?</p>
        </div>
        <div className="goal">
          <h1>GOAL TWO</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, perferendis?</p>
        </div>
        <div className="goal">
          <h1>GOAL THREE</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, perferendis?</p>
        </div>
      </div>
      <div style={{textAlign:"center", width:"768px", margin:"auto"}}>
        <h1 style={{textAlign:"center"}}>LET'S MAKE A DIFFERENCE TOGETHER</h1>
        <p style={{fontSize: "20px", textAlign:"center"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est esse debitis magni repellendus in ut ducimus aspernatur quibusdam earum ipsam maxime, eaque labore ea aliquam?</p>
      </div>
      <div className="staff">
        <h2>Leaders</h2>
        <div className="staff-items">
          <div className="person">
            <div className="staff-img">
              <img src={portr} alt="member"/>
            </div>
            <div className="staff-detail">
              <h4>Board Member</h4>
              <h3>Mr Alphabet Number</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse enim odio adipisci itaque laborum sit suscipit quam vitae rerum numquam.</p>
            </div>
          </div>
          <div className="person">
            <div className="staff-img">
              <img src={portr} alt="member"/>
            </div>
            <div className="staff-detail">
              <h4>Board Member</h4>
              <h3>Mr Alphabet Number</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse enim odio adipisci itaque laborum sit suscipit quam vitae rerum numquam.</p>
            </div>
          </div>
          <div className="person">
            <div className="staff-img">
              <img src={portr} alt="member"/>
            </div>
            <div className="staff-detail">
              <h4>Board Member</h4>
              <h3>Mr Alphabet Number</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse enim odio adipisci itaque laborum sit suscipit quam vitae rerum numquam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
