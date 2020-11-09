import React, { Component } from "react";
import classes from "./ProductInfo.css";
import { Firebase } from "../../config/firebase";
class ProductInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      producto: {},
    };
  }

  componentDidMount() {
    const id = this.props.id;
    console.log(this.props);
    const database = Firebase.database();
    var ref = database.ref(`Products/${id}`);
    ref.once(
      "value",
      (snapshot) => {
        this.setState({ producto: snapshot.val() });
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
  }

  render() {
    return (
      <div className={classes.gridContainer}>
        <div className={classes.gridItem}>
          <img src={this.state.producto.imagen}></img>
        </div>

        <div className={classes.gridItem}>
          <div className={classes.sombra}>
            <div className={classes.titulo}>{this.state.producto.nombre}</div>

            <br></br>

            <div className={classes.subtitulo}>
              {this.state.producto.presentacion}
            </div>

            <br></br>

            <div className={classes.categoria}>
              {this.state.producto.categoria}
            </div>
          </div>

          <br></br>

          <div className={classes.gridrow}>
            <div className={classes.gridItem3}>
              <i class="fas fa-flask"></i>
            </div>

            <div className={classes.gridItem2}>
              <p>Formula</p>
              {this.state.producto.formula}
            </div>

            <div className={classes.gridItem3}>
              <i class="fas fa-book-medical"></i>
            </div>

            <div className={classes.gridItem2}>
              <p>Indicaciones</p>
              {this.state.producto.indicaciones}
            </div>

            <div className={classes.gridItem3}>
              <i class="fas fa-pills"></i>
            </div>

            <div className={classes.gridItem2}>
              <p>Vía de administración</p>
              {this.state.producto.via}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
