import React, { Component } from "react";
import logo from "../assets/Vector.svg";
import arrow from "../assets/arrow.svg";
import navbtn from "../assets/navbtn.svg";
import "../styles/header.scss";

class header extends Component {
  render() {
    return (
      <div className="header">
        <button className="shadow navbtn">
          <img src={navbtn} />
        </button>
        <div>
          <img src={logo} />
        </div>
        <button className="btn bttn">
          Buy Now
          <img style={{ marginLeft: 10 }} src={arrow} />
        </button>
      </div>
    );
  }
}

export default header;
