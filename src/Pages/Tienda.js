import React, { Component } from "react";
import ProductGrid from "../Componentes/ProductGrid/ProductGrid";
import "swiper/swiper.scss";
import { Firebase } from "../config/firebase";

class Tienda extends Component {
  constructor() {
    super();
    this.state = {
      productos: [],
    };
  }
  componentDidMount() {
    const database = Firebase.database();
    var ref = database.ref(`Products/`);
    ref.once(
      "value",
      (snapshot) => {
        
        const productos = Object.values(snapshot.val()).map(function (obj,i) {
            let newObj = {
              id:Object.keys(snapshot.val())[i],
              ...obj
            }
          return newObj;
        });
        this.setState({ productos });
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
  }
  render() {
    return (
      <div>
        <ProductGrid products={this.state.productos} />
      </div>
    );
  }
}

export default Tienda;
