import React from "react";
import learn1 from "./images/learn1.jpg"
import learn2 from "./images/learn2.jpg"
import swazi from "./images/swaziland.png"
import people from "./images/coordination.png"


const Impact = () => {
  return (
    <div>
      <div className="impact-hero standard-hero">
        <h1>OUR IMPACT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nulla.
        </p>
      </div>
      <div className="impact-content">
        <div className="impact">
          <div className="impact1">
            <div className="impact-icon">
              <img src={people} alt="icon" style={{width: "80px"}}/>
              <h1>People And Famillies</h1>
            </div>
            <p style={{paddingRight: "150px", fontSize: "23px"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam accusantium reiciendis, dicta itaque blanditiis
              tenetur, optio laborum quos voluptates voluptas similique neque
              culpa veniam magnam! Sit sunt quo nostrum itaque?
            </p>
          </div>
          <div className="impact1-img">
            <img src={learn1} alt="learn"/>
          </div>
        </div>
        <div className="impact">
          <div className="impact1-img">
          <img src={learn2} alt="learn"/>
          </div>
          <div className="impact1">
            <div className="impact-icon" style={{paddingLeft: "150px"}}>
              <img src={swazi} alt="icon" style={{width: "80px"}}/>
              <h1>The Country</h1>
            </div>
            <p style={{paddingLeft: "150px", fontSize: "23px"}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
              adipisci quia earum officiis, consequuntur laboriosam nihil
              tempore rerum corporis iure?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
