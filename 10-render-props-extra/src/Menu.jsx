import React, { Component } from "react";
import withToggler from "./HOCs/withToggler";

const Menu = (props) => {
  return (
    <div>
      <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu</button>
      <nav style={{ display: props.on ? "block" : "none" }}>
        <h6>Signed in as Coder123</h6>
        <p><a>Your Profile</a></p>
        <p><a>Your Repositories</a></p>
        <p><a>Your Stars</a></p>
        <p><a>Your Gists</a></p>
      </nav>
    </div>
  );
};

const superchargedMenuComponent = withToggler(Menu, { defaultOnValue: true });
export default superchargedMenuComponent;
