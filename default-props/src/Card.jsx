import React from "react";

// function component
/*
function Card(props) {
  const styles = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width,
  };

  return <div style={styles}></div>;
}

// static property
Card.defaultProps = {
  cardColor: "papayawhip",
  height: 100,
  width: 300,
};
*/

// class component
class Card extends React.Component {
  static defaultProps = {
    cardColor: "papayawhip",
    height: 100,
    width: 400,
  };

  render() {
    const styles = {
      backgroundColor: this.props.cardColor,
      height: this.props.height,
      width: this.props.width,
    };

    return <div style={styles}></div>;
  }
}

export default Card;
