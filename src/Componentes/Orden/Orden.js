import React from 'react';

const orden = () => {
    return (
        <form className={Style.form} onSubmit={sendEmail} id="contactForm">
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
        <Button color={"blue"} type="submit" >Agregar</Button>
      </form>
    )
};

export default orden;