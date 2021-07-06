import React, { Component } from "react";
import "../../styles/Sub3.scss";
import finger from "../../assets/fingerprint.svg";
class Sub3 extends Component {
  render() {
    return (
      <div className="Sub3">
        <h1 className="Sub3-head">
          How <span>ORBITRAGE</span> Works
        </h1>
        <div className="cardCont">
          <div className="card shadow c1">
            <div className="imagee shadow">
              <img src={finger} />
            </div>
            <div className="textCont">
              <h1>Monitoring</h1>
              <p>
                Orbitrage bot constantly monitors price of a particular pair and
                arbitrage opportunity in the form of direct opportunity,
                triangular arbritrage opportunity.
              </p>
            </div>
          </div>
          <div className="card shadow c2">
            <div className="imagee shadow">
              <img src={finger} />
            </div>
            <div className="textCont">
              <h1>Evaluate</h1>
              <p>
                When a opprotunity found then orbritrage bot calculates
                slippage, trading fees and checks if its a profitable
                opportunity.
              </p>
            </div>
          </div>
          <div className="card shadow c3">
            <div className="imagee shadow">
              <img src={finger} />
            </div>
            <div className="textCont">
              <h1>Execute</h1>
              <p>
                When orbtrage bot confirms that the opportunity is profitable
                and have a profit of 0.001% at least then it executes smart
                contract function with proper instruction like where to buy what
                to buy and how much.
              </p>
            </div>
          </div>
          <div className="card shadow c4">
            <div className="imagee shadow">
              <img src={finger} />
            </div>
            <div className="textCont">
              <h1>Report</h1>
              <p>
                Orbritrage bot constantly monitor and report its timing
                performance after every successfull execution. To help us
                improve it overtime.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sub3;
