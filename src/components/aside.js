import React from "react";
import Zen from "../assets/zen.png";
import Swim from "../assets/swim.png";
import Bike from "../assets/bike.png";
import Bodybuilding from "../assets/bodybuilding.png";
import "../components/css/homepage.css";
function aside(props) {
  return (
    <div>
      <div className="header__aside-item">
        <img className="header__aside-img" src={Zen} alt="Logo" />
        <img className="header__aside-img" src={Swim} alt="Logo" />
        <img className="header__aside-img" src={Bike} alt="Logo" />
        <img className="header__aside-img" src={Bodybuilding} alt="Logo" />
      </div>
      <p className="header__aside-text">Copyright, SportSee 2022</p>
    </div>
  );
}

export default aside;
