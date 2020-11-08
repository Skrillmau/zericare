import React from 'react';
import Info from "../Componentes/Info/Info";
import BannerText from "../Componentes/BannerText/BannerText";
import Pacientes from "../Componentes/Pacientes/Pacientes.js"
import Buttom from "../Componentes/Button/txt/txtButton.js"

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
            
            <Pacientes nombre="Nikolas" />
            <Buttom color="blue">Añadir Paciente</Buttom>

        </div>
    );
};

export default PerfilM;