import React, { Component } from "react";
import hand from "../../assets/Hand.svg";
import arrow from "../../assets/arrow.svg";
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
          <a href="https://pool.orbitedge.finance">
            {" "}
            <button className="btn bttn">
              Buy Now
              <img style={{ marginLeft: 10 }} src={arrow} />
            </button>
          </a>
        </div>
        <div className="sub1-child2">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lELLEsM0TSY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default sub1;
