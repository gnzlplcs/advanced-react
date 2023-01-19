import React from "react";
import withPointlessHOC from "./withPointlessHOC";
import withExtraPropAdded from "./withExtraPropAdded";

// a function that takes a component as its first argument and returns a new component that wraps the given component, providing extra capabilities to it

function App(props) {
  console.log(props)
  return <div>Hello world!</div>;
}

const ExtraPropComponent = withExtraPropAdded(App)

export default ExtraPropComponent;
