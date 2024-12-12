import React, { Component } from "react";
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count > 0 ? this.state.count - 1 : 0 });
  };
  componentDidMount() {
    console.log("I'm here 🙄")
  }
  componentDidUpdate() {
    console.log("they update me 😶🫥")
  }
  componentWillUnmount() {
    console.log("I'm dead 💀")
  }
  render() {
    return (
      <div>
        <button onClick={this.increment}>Incremant</button>
        <p>{this.state.count}</p>      
        <button onClick={this.decrement}>Decremant</button>
      </div>
    );
  }
}


