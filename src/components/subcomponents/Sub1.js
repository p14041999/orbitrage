import React, { Component } from "react";
import telegram from "../../assets/navbtn_new.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
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
          <div></div>
          <div className="social-group">
            {/* <p>Join our Community</p> */}
            
            <div className="btn-flex">
              <a href="https://pool.orbitedge.finance" >
                {/* {" "}
                <button className="btn btn" style={{marginTop:'30px'}}>
                  
                </button> */}
                <button className="social-btn shadow btn-flex">
                  <p style={{marginLeft:'10px'}} className="text-grad">Invest Now</p>
                  <img style={{ marginLeft: 10 }} src={arrow} />
                </button>
              </a>
              <a href="http://t.me/orbitedge" target="_blank" style={{marginLeft:'30px'}}>
              <button className="social-btn shadow btn-flex">
                <img src={telegram} />
                <p style={{marginLeft:'10px'}} className="text-grad">Join our Community</p>
              </button></a>
              {/* <button className="social-btn shadow">
                <img src={facebook} />
              </button>
              <button className="social-btn shadow">
                <img src={twitter} />
              </button> */}
            </div>
          </div>
        </div>
        <div className="sub1-child2">
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/lELLEsM0TSY?autoplay=1&mute=1"
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
