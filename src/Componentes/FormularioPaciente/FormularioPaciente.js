import { Button } from '@material-ui/core';
import React from 'react';
import Buttom from "../Button/txt/txtButton.js";

const FormularioPaciente = (props) => {
    return (
        
        <div>
            <h3>Agregar Paciente</h3>
              <form className="" onSubmit="" id="contactForm">
        <input
          className=""
          name="name"
          type="text"
          placeholder="Nombre "
          required
        />
        <br />
        <input
          className=""
          name="apellido"
          type="text"
          placeholder="Apellido"
          required
        />
        <br />
        <input
          className=""
          name="sexo"
          type="text"
          placeholder="Sexo "
        />
        <br />
        <textarea
          className=""
          name="sexo"
          rows="10"
          placeholder="Sexo"
          required
        />
        <button color={"blue"} type="submit" >Agregar</button>
      </form>
        </div>
    );
};

export default FormularioPaciente;