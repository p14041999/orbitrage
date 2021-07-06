import React, { Component } from "react";
import "../../styles/Sub2.scss";
import rect from "../../assets/Weather.svg";

class Sub2 extends Component {
  render() {
    return (
      <div className="sub2">
        <div className="sub2-child1">
          <img src={rect} />
        </div>
        <div className="sub2-child2">
          <h1>
            About <span>ORBITRAGE</span>
          </h1>
          <p>
            Orbitrage is a decentralize finance protocol to make money using
            arbritrage opportunities in an automated manner using a high end
            sever and a optimized algorithm, which works really fast.
          </p>
          <p>
            Orbritrage uses Binance smart chain based exchanges to as many of
            the tokens are being launched in binance smart chain. you can go
            through our smart contracts for more in depth technical information
            and understanding.
          </p>
          <p>
            Orbritrage creates its monopoly lowering its execution time. Its
            10ms now.
          </p>
        </div>
      </div>
    );
  }
}

export default Sub2;
