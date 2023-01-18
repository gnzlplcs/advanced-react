import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const styles = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width,
  };

  return <div style={styles}></div>;
}

// Challenge: Add prop types for the height and width. Make at least one of them required.
// Extra Challenge: Make it so your incoming cardColor is only valid if it is "blue" or "red".

Card.propTypes = {
  // type and isRequired
  cardColor: PropTypes.oneOf(['turquoise', 'papayawhip', 'rebeccapurple']).isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number
}

Card.defaultProps = {
  cardColor: "papayawhip",
  height: 100,
  width: 400,
};

export default Card;
