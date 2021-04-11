import React, { Component } from "react";
import Advertisement from "./Advertisement";
import SubContents from "./SubContents";

class Main extends Component {
  render() {
    return (
      <div className="main bg-danger container col-9">
        <div className="row p-3">
          <SubContents />
          <SubContents />
          <SubContents />
          <Advertisement />
        </div>
      </div>
    );
  }
}

export default Main;
