import React from "react";
import { withRouter } from "react-router-dom";
import OrdenBanner from '../OrdenBanner/OrdenBanner';

function ListaOrdenes(props) {

  const ordenes = Object.values(props.ordenes).map(function (obj,i) {
      let newObj = {
        fecha:Object.keys(props.ordenes)[i],
        ...obj
      }
    return newObj;
  });

  return (
    <div>
      {ordenes.map((item, i) => {
        const {fecha} = item
        delete item.fecha
        return <OrdenBanner key={i} orden={item} fecha={fecha}/>
      })}
    </div>
  );
}

export default withRouter(ListaOrdenes);
