import React from 'react';
import Button from "../Button/txt/txtButton.js"

const orden = (props) => {
    return (
        <form className="" onSubmit={props.onsubmit} id="contactForm">
        <input
          className=""
          name="name"
          type="text"
          placeholder="Nombre medicamento"
          required
        />
        <br />
        <input
          className=""
          name="cantidad"
          type="text"
          placeholder="Cantidad"
          required
        />
        <br />
        <input
          className=""
          name="dosis"
          type="text"
          placeholder="Dosis diaria"
        />
        <br />
        <textarea
          className=""
          name="observaciones"
          rows="10"
          placeholder="Observaciones"
          required
        />
        <br />
        <input
          className=""
          id={"check"}
          name="check"
          type="checkbox"
          required
        />
        <label htmlFor={"check"}>
          Acepto Términos y Condiciones y Política de Privacidad.
        </label>
        <Button color={"blue"} type="submit" >Agregar</Button>
      </form>
    )
};

export default orden;