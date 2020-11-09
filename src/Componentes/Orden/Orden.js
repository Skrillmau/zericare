import React from 'react';
import Button from "../Button/txt/txtButton.js"
import Style from "./Orden.css";
const orden = (props) => {
  return (

    <div className={Style.item2}>
      <h2 className={Style.subtitulo}>Agregar medicamento</h2>
      <form className={Style.form} onSubmit={props.onsubmit} id="contactForm">
        <input
          className={Style.input}
          name="name"
          type="text"
          placeholder="Nombre medicamento"
          required
        />
        <br />
        <input
          className={Style.input}
          name="cantidad"
          type="text"
          placeholder="Cantidad"
          required
        />
        <br />
        <input
          className={Style.input}
          name="dosis"
          type="text"
          placeholder="Dosis diaria"
        />
        <br />
        <textarea
          className={Style.input}
          name="observaciones"
          rows="10"
          placeholder="Observaciones"
          required
        />
        <br />
        <input
          className={Style.checkbox}
          id={"check"}
          name="check"
          type="checkbox"
          required
        />
        <label htmlFor={"check"}>
          Acepto Términos y Condiciones y Política de Privacidad.
        </label>
        <div></div>
        <Button color={"blue"} type="submit" >Agregar</Button>
       
      </form>
      <Button color={"red"}  onclick={props.onSend}>Enviar</Button>
    </div>

  )
};

export default orden;