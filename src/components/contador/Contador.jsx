import React, { Component } from "react";
import "./Contador.css"; 
import Display from "./Display";
import Buttons from "./Buttons";

class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: this.props.initialNumber || 0,
    };

    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }

  inc() {
    this.setState({ number: this.state.number + 1 });
  }

  dec() {
    this.setState({ number: this.state.number - 1 });
  }

  render() {
    return (
      <div className="contador">
        <Display number={this.state.number} />
        <Buttons inc={this.inc} dec={this.dec} />
      </div>
    );
  }
}

export default Contador;
