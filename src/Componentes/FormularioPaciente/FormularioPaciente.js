import React from 'react';

const FormularioPaciente = () => {
    return (
        
        <div>
            <h3>Agregar Paciente</h3>
              <form className="" onSubmit={props.onsubmit} id="contactForm">
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
        <Button color={"blue"} type="submit" >Agregar</Button>
      </form>
        </div>
    );
};

export default FormularioPaciente;