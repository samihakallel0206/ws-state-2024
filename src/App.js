import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  handleShow = () => { this.setState({ show: !this.state.show }) }

  render() {
    // console.log(this.state.show)
    return (
      <div className="App">
        <h2>WS REACT STATE</h2>
        <button onClick={this.handleShow}>{this.state.show? "Hide": "Show" }</button>
        {this.state.show && <Counter />}
      </div>
    );
  }
}
