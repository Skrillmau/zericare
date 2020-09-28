import React, { useState } from "react";
import Style from "./contact.module.css";
import Button from "../Button/txt/txtButton";
import emailjs from "emailjs-com";
import swal from "sweetalert2";

const customStyles = {
  content: {
    width: "80%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1000000",
  },
};
const Contact = (props) => {
  const tipo = props.type;

  let style;
  if (tipo === "min") {
    style = Style.hidden;
  }
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          document.getElementById("contactForm").reset();
          swal.fire({
            title: "Mensaje enviado correctamente",
            icon: "success",
            showConfirmButton: false,
            timer: 3500,
          });
        },
        (error) => {
          swal.fire({
            title: "Hubo un problema intentando enviar tu mensaje",
            icon: "error",
            confirmButtonColor: "#CE0058",
          });
        }
      );
  }
  return (
    <div className={Style.grid}>
      <div className={Style.item1}>
        <img src="https://img.freepik.com/foto-gratis/felices-abuelos-jugando-su-nieto-casa_107420-10262.jpg?size=626&ext=jpg"></img>
      </div>
      <div className={Style.item2}>
        <h2 className={Style.subtitulo}>¡Queremos atenderte!</h2>
        <form className={Style.form} onSubmit={sendEmail} id="contactForm">
          <input
            className={Style.input}
            name="name"
            type="text"
            placeholder="Nombre"
            required
          />
          <br />
          <input
            className={Style.input}
            name="email"
            type="email"
            placeholder="Correo"
            required
          />
          <br />
          <input
            className={Style.input}
            name="subject"
            type="text"
            placeholder="Asunto"
          />
          <br />
          <textarea
            className={Style.input}
            name="message"
            rows="10"
            placeholder="Descripción"
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
          <Button color={"red"} type="submit" >Enviar</Button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default Contact;
