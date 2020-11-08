import React from 'react';
import Info from "../Componentes/Info/Info";
import BannerText from "../Componentes/BannerText/BannerText";
import Pacientes from "../Componentes/Pacientes/Pacientes.js"

const PerfilM = (props) => {
    return (
        <div>
            <Info
                
                imagen="Jane Doe"
                nombre="asdsadaasd"
                apellido="assadsadsad"
                id="asdasdasd"
                sexo="asdasdsad"
                ocupacion="Médico Internista"
            />
            <p>Buenas noches</p>
            <Pacientes nombre="Nikolas" />
        </div>
    );
};

export default PerfilM;