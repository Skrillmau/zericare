import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ListaPacientes.css";
import Pacientes from '../Pacientes/Pacientes'



import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";



function ListaPacientes(props) {
    const pacientesDef= []
    var pacientes = Object.values(props.pacientes).map(function (obj) {
        return obj; 
    });

    return (
        <div className={classes.main}>
            <div className={classes.gridContainer}>
                {pacientes.map((item, i) => {

                    return (

                        <Pacientes nombre={item.nombre} apellido={item.apellido} creado={item.registro}  />
                    )
                })}

            </div>
        </div>
    )
}

export default ListaPacientes