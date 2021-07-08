import React, { Component } from "react";
import "../../styles/Sub4.scss";
import founder from "../../assets/founder.svg";
import webd from "../../assets/webd.svg";
import bd from "../../assets/bd.svg";
import pi from "../../assets/pi.svg";

class Sub4 extends Component {
  render() {
    return (
      <div className="Sub4">
        <h1>
          <span>Orbit Edge</span> Team
        </h1>
        <div className="teamCont">
          <div className="cardii">
            <div className="upperbox">
              <img src={founder} />
              <div className="leftCir"></div>
              <div className="rightCir"></div>
              <div className="lowerbox">
                <hr />
                <h3>Founder</h3>
                <h2>Eugene Ubalijoro</h2>
              </div>
            </div>
          </div>
          <div className="cardii">
            <div className="upperbox">
              <img src={webd} />
              <div className="leftCir"></div>
              <div className="rightCir"></div>
              <div className="lowerbox">
                <hr />
                <h3>Web Developer/Designer</h3>
                <h2>Mona Singh</h2>
              </div>
            </div>
          </div>
          <div className="cardii">
            <div className="upperbox">
              <img src={bd} />
              <div className="leftCir"></div>
              <div className="rightCir"></div>
              <div className="lowerbox">
                <hr />
                <h3>Blockchain Developer</h3>
                <h2>Ankit Nagpal</h2>
              </div>
            </div>
          </div>
          <div className="cardii">
            <div className="upperbox">
              <img src={pi} />
              <div className="leftCir"></div>
              <div className="rightCir"></div>
              <div className="lowerbox">
                <hr />
                <h3>Primary Investor</h3>
                <h2>Rob Wilson</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sub4;
