import React, { Component } from "react";
import Parent from "./Parent";

class GrandParent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps) // this prompts an empty object
    console.log(this.props.count)
    if (nextProps.count === this.props.count) {
      return false;
    }
    return true;
  }

  render() {
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered");
    return (
      <div>
        <p>I'm a GrandParent Component</p>
        <Parent />
        <Parent />
      </div>
    );
  }
}

export default GrandParent;
