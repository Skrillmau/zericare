import { Button } from '@material-ui/core';
import React from 'react';
import Buttom from "../Button/txt/txtButton.js";
import Style from './FormularioPaciente.css';

const FormularioPaciente = (props) => {
    return (
        
        <div className={Style.item2}>
            <h3>Agregar Paciente</h3>
              <form className={Style.form} onSubmit="" id="contactForm">
        <input
          className={Style.input}
          name="name"
          type="text"
          placeholder="Nombre "
          required
        />
        <br />
        <input
          className={Style.input}
          name="apellido"
          type="text"
          placeholder="Apellido"
          required
        />
        <br />
        <input
          className={Style.input}
          name="sexo"
          type="text"
          placeholder="Sexo "
        />
        <br />
        <textarea
          className={Style.input}
          name="sexo"
          rows="10"
          placeholder="Sexo"
          required
        />
        <Button color={"blue"} type="submit" >Agregar</Button>
      </form>
        </div>
    );
};

export default FormularioPaciente;