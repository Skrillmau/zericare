import React from 'react';
import Button from '../Button/txt/txtButton'


const pacientes = (props) => {
    return (
        <div>
            <div>
                <img src="https://www.lavozdemichoacan.com.mx/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-14-at-6.22.29-PM.jpga" />
            </div>
            <div>
                <p>Nombre: {props.nombre}</p>
                <p>Id: {props.id}</p>
                <p>Visto última vez: {props.uv}</p>
                <Button color="blue"> Ver más</Button>
                <Button color="blue"> Añadir Orden  </Button>
            </div>

        </div>
    );
};

export default pacientes;