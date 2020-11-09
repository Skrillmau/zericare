import React from "react";
import { withRouter } from "react-router-dom";
import HistoriaBanner from '../HistoriaBanner/HistoriaBanner';

function ListaHistorias(props) {
  const historias = Object.values(props.historias).map(function (obj,i) {
      let newObj = {
        fecha:Object.keys(props.historias)[i],
        ...obj
      }
    return newObj;
  });

  return (
    <div>
      {historias.map((item, i) => {
        return <HistoriaBanner key={i} historia={item}/>
      })}
    </div>
  );
}

export default withRouter(ListaHistorias);
