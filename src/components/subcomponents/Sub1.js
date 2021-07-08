import React, { Component } from "react";
import hand from "../../assets/Hand.svg";
import "../../styles/Sub1.scss";
class sub1 extends Component {
  render() {
    return (
      <div className="sub1">
        <div className="sub1-child1">
          <h1>
            <span>Orbit Edge</span> Makes Arbritrage Profitable
          </h1>
          <p>
            Orbit Edge uses autobot and smart contract to make profit out of
            different exchanges price difference within few miliseconds. Our
            arbitrage bot is capable to find out price difference and execute a
            trade within 10ms.
          </p>
          <button className="btn sub1-btn">Download Whitepaper Now</button>
        </div>
        <div className="sub1-child2">
          <img src={hand} />
        </div>
      </div>
    );
  }
}

export default sub1;
