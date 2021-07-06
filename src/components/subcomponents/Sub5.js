import React, { Component } from "react";
import "../../styles/Sub3.scss";
import finger from "../../assets/fingerprint.svg";
class Sub3 extends Component {
  render() {
    return (
      <div className="Sub3">
        <h1 className="Sub3-head">
          <span>ROADMAP</span>
        </h1>
        <div className="cardCont">
          <div className="card shadow c1 p">
            <div className="imagee shadow">
              <img src={finger} />
            </div>
            <div className="textCont">
              <h1>Ideation</h1>
              <h3>Sept 2020</h3>
            </div>
          </div>
          <div className="card shadow c2 p">
            <div className="imagee shadow">
              <img src={finger} />
            </div>
            <div className="textCont">
              <h1>Development</h1>
              <h3>Oct 2020</h3>
            </div>
          </div>
          <div className="card shadow c3 p">
            <div className="imagee shadow">
              <img src={finger} />
            </div>
            <div className="textCont">
              <h1>Launch</h1>
              <h3>Jul 2021</h3>
            </div>
          </div>
          <div className="card shadow c4 p">
            <div className="imagee shadow">
              <img src={finger} />
            </div>
            <div className="textCont">
              <h1>Flash Loan</h1>
              <h3>Oct 2021</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sub3;
