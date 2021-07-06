import React, { Component } from "react";
import Sub1 from "./subcomponents/Sub1";
import Sub2 from "./subcomponents/Sub2";
import Sub3 from "./subcomponents/Sub3";
import Sub4 from "./subcomponents/Sub4";
import Sub5 from "./subcomponents/Sub5";
import Sub6 from "./subcomponents/Sub6";
class Main extends Component {
  render() {
    return (
      <div>
        <Sub1 />
        <Sub2 />
        <Sub3 />
        <Sub4 />
        <Sub5 />
        <Sub6 />
      </div>
    );
  }
}

export default Main;
