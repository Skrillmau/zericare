import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ListaPacientes.css";
import Pacientes from '../Pacientes/Pacientes'



import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";



function ListaPacientes() {
    return (
        <div className={classes.main}>
            <div className={classes.gridContainer}>
                <Pacientes nombre="Nikolas" />
            </div>
        </div>
    )
}

export default ListaPacientes