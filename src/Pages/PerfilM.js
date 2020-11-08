import ProductGrid from '../Componentes/ProductGrid/ProductGrid'
import Info from "../Componentes/Info/Info";
import BannerText from "../Componentes/BannerText/BannerText";
import Pacientes from "../Componentes/Pacientes/Pacientes.js"
import axios from 'axios';
import React, { PureComponent } from 'react'
import ListaPacientes from '../Componentes/ListaPacientes/ListaPacientes'


class PerfilM extends PureComponent {
   
    render() {
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

            
            
            <div>
                <ListaPacientes/>
            </div>

            </div>

            
        );
    }

}

export default PerfilM
