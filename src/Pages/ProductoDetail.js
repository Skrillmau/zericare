import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ProductoInfo from '../Componentes/ProductInfo/ProductInfo'
class ProductoDetail extends Component {
  render() {
    console.log(this.props.match.params);
    const { id } = this.props.match.params;
    return (
    <div>
      <ProductoInfo id={id}></ProductoInfo>
    </div>
    )
  }
}

export default withRouter(ProductoDetail);
