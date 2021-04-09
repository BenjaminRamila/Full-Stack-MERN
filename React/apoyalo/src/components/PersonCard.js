import React, { Component } from "react";

class PersonCard extends Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.someText.lastName}
          <span>, </span>
          {this.props.someText.firstName}
        </h2>
        <p><span>Age: </span>{this.props.someText.age}</p>
        <p><span>Hair Color: </span>{this.props.someText.hairColor} </p>
      </div>
    );
  }
}

export default PersonCard;
