import React, { Component } from "react";
import logo from "../assets/Vector.svg";
import arrow from "../assets/arrow.svg";
import navbtn from "../assets/navbtn_new.svg";
import "../styles/header.scss";

class header extends Component {
  render() {
    return (
      <div className="header">
        <button className="shadow navbtn"><a href="http://t.me/orbitedge">
          <img src={navbtn} />
        </a></button>
        <div>
          <img src={logo} />
        </div>
        <span></span>
      </div>
    );
  }
}

export default header;
