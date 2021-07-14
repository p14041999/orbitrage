import React, { Component } from "react";
import train from "../../assets/train.svg";
import "../../styles/Sub6.scss";
import qna from "../../assets/qna";
class Sub6 extends Component {
  render() {
    return (
      <div className="sub6">
        <h1>FAQ'S</h1>
        <div className="cardeCont">
          {qna.map((item) => (
            <div className="carde shadow">
              <div className="emage shadow">
                <img src={train} />
              </div>
              <div className="textee">
                <h3>{item.ques}</h3>
                <p>{item.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Sub6;
