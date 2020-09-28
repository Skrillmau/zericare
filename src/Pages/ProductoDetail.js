import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ProductoDetail extends Component {
  render() {
    console.log(this.props.match.params);
    const { id } = this.props.match.params;
  return <div>from producto {id}</div>;
  }
}

export default withRouter(ProductoDetail);
