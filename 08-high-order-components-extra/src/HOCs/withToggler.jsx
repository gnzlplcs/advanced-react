import React from "react";
import { Component } from "react";

// HOC is a function that takes a component as a parameter and returns a new component wrapping the given component and "supercharging" it by giving it some extra abilities

class Toggler extends Component {
  state = {
    on: this.props.defaultOnValue,
  };

  toggle = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on,
      };
    });
  };

  render() {
    const { component: Component, defaultOnValue, ...props } = this.props;
    return <Component on={this.state.on} toggle={this.toggle} {...props} />;
  }
}

const withToggler = (component, optionsObj) => {
  return function (props) {
    return (
      <Toggler
        component={component}
        defaultOnValue={optionsObj.defaultOnValue}
        {...props}
      />
    );
  };
};

export default withToggler;
