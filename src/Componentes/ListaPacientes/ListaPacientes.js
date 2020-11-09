import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ListaPacientes.css";
import Pacientes from "../Pacientes/Pacientes";
import { withRouter } from "react-router-dom";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

function ListaPacientes(props) {
  const pacientesDef = [];
  var pacientes = Object.values(props.pacientes).map(function (obj) {
    return obj;
  });

  return (
    <div>
      <div className={classes.Header}>
        <div className={classes.item}>Foto</div>
        <div className={classes.item}>Nombre</div>
        <div className={classes.item}>Apellido</div>
        <div className={classes.item}>Dia de creación</div>
        <div className={classes.item}>Acciones</div>
      </div>
      <div className={classes.gridContainer}>
        {pacientes.map((item, i) => {
          return (
            <Pacientes
              nombre={item.nombre}
              apellido={item.apellido}
              creado={item.registro}
              ver={() =>
                props.history.push(
                  `/paciente/${Object.keys(props.pacientes)[i]}`
                )
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default withRouter(ListaPacientes);
