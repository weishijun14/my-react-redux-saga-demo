import React from "react";
import { connect } from "react-redux";

class Dogg extends React.Component {
  constructor(props) {
    super(props);
  }

  getImg() {
    this.props.dispatch({
      type: "getImgAct",
      payload: ""
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.getImg()}>点击获取狗狗图片</button>
        <div>
          <img src={this.props.reducer1.message} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Dogg);
