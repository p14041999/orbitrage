import React, { Component } from "react";
import logo from "../assets/Vector.svg";
import arrow from "../assets/arrow.svg";
import navbtn from "../assets/navbtn.svg";
import "../styles/header.scss";

class header extends Component {
  render() {
    return (
      <>
      <div className="header">
        <button className="shadow navbtn">
          <img src={navbtn} />
        </button>
        <div>
          <img src={logo} />
        </div>
        <span></span>
      </div>
      {/* <div class="menu">
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
      </div> */}
      </>
    );
  }
}

export default header;
