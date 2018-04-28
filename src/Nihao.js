import React from "react";
import { connect } from "react-redux";

function handleClick2(props) {
  props.dispatch({ type: "h2click", payload: "h22222222222" });
}

const Nihao = props => {
  return (
    <div>
      <h2 onClick={() => handleClick2(props)}>nihao, {props.reducer2.text2}</h2>
    </div>
  );
};

export default connect(state => state)(Nihao);
