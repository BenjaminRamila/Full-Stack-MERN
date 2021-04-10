import React, { Component } from 'react';
    
    
class NameCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.someText.age
        };
    }


    render() {
        return <div>
        <h2>
          {this.props.someText.lastName}
          <span>, </span>
          {this.props.someText.firstName}
        </h2>
        <p><span>Age: </span>{this.state.age}</p>
        <p><span>Hair Color: </span>{this.props.someText.hairColor} </p>
        <button onClick={ this.birthdayPlus }>Birthday Time</button>
      </div>;
    }

    birthdayPlus = () => {
        this.setState({ age: this.state.age+1});
        
      }
}
    
export default NameCard;