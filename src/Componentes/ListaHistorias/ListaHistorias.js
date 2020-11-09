import React from "react";
import { withRouter } from "react-router-dom";
import HistoriaBanner from '../HistoriaBanner/HistoriaBanner';
import classes from './ListaHistorias.css'
function ListaHistorias(props) {
  const historias = Object.values(props.historias).map(function (obj,i) {
      let newObj = {
        fecha:Object.keys(props.historias)[i],
        ...obj
      }
    return newObj;
  });

  return (
    <div className={classes.gridContainer}>
      
      {historias.map((item, i) => {
        return <HistoriaBanner key={i} historia={item}/>
      })}
      </div>
      
    
  );
}

export default withRouter(ListaHistorias);
