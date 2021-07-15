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
            About <span>Orbit Edge</span>
          </h1>
          <p>
            Orbit Edge is a decentralize finance protocol to make money using
            arbritrage opportunities in an automated manner using a high end
            sever and a optimized algorithm, which works really fast.
          </p>
          <p>
          Orbit Edge can calculate the Price difference of all Tokens from all
           the swaps available in Binance Smart Chain and can execute a profitable trade.
          </p>
          <p>
            Orbit Edge creates its monopoly lowering its execution time. Its
            10ms now.
          </p>
        </div>
      </div>
    );
  }
}

export default Sub2;
