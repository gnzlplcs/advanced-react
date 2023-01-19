import React from "react";

const withExtraPropAdded = (component) => {
  const Component = component;
  return function (props) {
    return <Component anotherProp="Blah blah blah" {...props} />;
  };
};

export default withExtraPropAdded;
