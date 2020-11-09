import { Button } from '@material-ui/core';
import React from 'react';


const EditarPerfil = (props) => {
    return (
        <div action="">
            <img src={this.props.usuario.imagen}/>
            <form>
            <input type="text"  name="nombre" placeholder="Nuevo nombre"></input>
            <input type="text" name ="apellido" placeholder="Nuevo apellido"></input>
            <input type="text" name="ocupacion" placeholder="Nueva ocupación"></input>
            <input type="text" nameplaceholder="Nuevo sexo(?)"></input>
            <Button color="blue">Guardar</Button>
            </form>
        </div>
    );
};

export default EditarPerfil;