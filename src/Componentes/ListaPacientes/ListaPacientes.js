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
        
        <div >
            <div className={classes.gridContainer}>
                {pacientes.map((item, i) => {
                    return (
<div>
<Pacientes nombre={item.nombre} apellido={item.apellido} creado={item.registro} ver={props.ver} />
<br/>
</div>
                        
                        
                    )
                })}

            </div>
        </div>
    )
}

export default ListaPacientes