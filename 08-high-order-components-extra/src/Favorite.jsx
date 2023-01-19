import React, { Component } from "react";
import withToggler from "./HOCs/withToggler";

const Favorite = (props) => {
  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span onClick={props.toggle}>{props.on ? "❤️" : "♡"}</span>
      </h1>
    </div>
  );
};

const superchargedFavoriteComponent = withToggler(Favorite, {
  defaultOnValue: false,
});

export default superchargedFavoriteComponent;
