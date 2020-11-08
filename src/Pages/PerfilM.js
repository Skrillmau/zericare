import ProductGrid from '../Componentes/ProductGrid/ProductGrid'
import Info from "../Componentes/Info/Info";
import BannerText from "../Componentes/BannerText/BannerText";
import Pacientes from "../Componentes/Pacientes/Pacientes.js"
<<<<<<< HEAD
import Buttom from "../Componentes/Button/txt/txtButton.js"
=======
import axios from 'axios';
import React, { PureComponent } from 'react'
import ListaPacientes from '../Componentes/ListaPacientes/ListaPacientes'
>>>>>>> ce10f68347b0a16858e7c132b58e1e5683c322e3


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
<<<<<<< HEAD
            
            <Pacientes nombre="Nikolas" />
            <Buttom color="blue">Añadir Paciente</Buttom>

        </div>
    );
};
=======
            <p>Buenas noches</p>
>>>>>>> ce10f68347b0a16858e7c132b58e1e5683c322e3

            
            
            <div>
                <ListaPacientes/>
            </div>

            </div>

            
        );
    }

}

export default PerfilM
