import React from "react";
import { connect } from "react-redux";

function handleClick(props) {
  props.dispatch({ type: "h1click", payload: "hhhhh1" });
}

const Hello = props => {
  return <h1 onClick={() => handleClick(props)}>Hello1 {props.name}!</h1>;
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Hello);
