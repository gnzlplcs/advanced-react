import React from "react";

// a function that takes a component as its first argument and returns a new component that wraps the given component, providing extra capabilities to it

const withPointlessHOC = (component) => {
  const Component = component;
  return function (props) {
    return <Component {...props}/>;
  };
};

export default withPointlessHOC;
