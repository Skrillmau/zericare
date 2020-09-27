import React, { useState } from "react";
import Style from "./contact.module.css";
import Send from "../send/send";
import emailjs from "emailjs-com";
import swal from "sweetalert2";

const customStyles = {
  content: {
    width:'80%',
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  let style;
  if (tipo === "min") {
    style = Style.hidden;
  }
  function handleSubmit(e) {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.email.value);
    setSubject(e.target.subject.value);
    setMessage(e.target.message.value);
  }
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT,
        {
          from_name: name,
          email: email,
          message: message,
          subject: subject,
        },
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
  function handleSend(e) {
    e.preventDefault();
    sendEmail(e);
  }
  return (
    <div className={Style.grid}>
      <div className={Style.item1}>
        <p>
          Calle 85a #28b - 34
          <br />
          Bogotá, Colombia
        </p>
        <br/>
        <p><a href="tel:0316215380">Tel. (031) 621 5380</a></p>
        <br/>
        <p><a target={'blank'} href={"mailto:info@pharmalabsa.com"}>info@pharmalabsa.com</a></p>
        <br/>
        <p>
          Horario.
          <br />
          L-V 7:30 - 18:00 hrs.
          <br />S 9:00 - 12:00 hrs.
        </p>
        <br/>
        <div style={{ width: "40%", marginLeft: "0px", paddingLeft: "0%" }}>
          <a className={`hvr-grow ${style}`} target={'blank'} href="https://www.instagram.com/pharmalabphl/">
            <img
              className={Style.icono}
              src={"/assets/Instagram.png"}
              alt="instagram"
            />
          </a>
          <a className={`hvr-grow ${style}`} target={'blank'}  href="https://www.facebook.com/PharmalabPHL">
            <img
              className={Style.icono}
              src={"/assets/Facebook.png"}
              alt="facebook"
            />
          </a>
          <a className={`hvr-grow ${Style.blog} ${style}`} href="#">
            Blog
          </a>
        </div>
        <a href="https://goo.gl/maps/LJzy3QZ9v3e9s5MHA" target={"blank"}>
          <img
            className={`hvr-grow ${style}`}
            style={{
              width: "100%",
              marginTop: "10%",
            }}
            src={"/assets/Mapa.svg"}
            alt="Mapa"
          />
        </a>
      </div>
      <div className={Style.item2}>
        <h2 className={Style.subtitulo}>¡Queremos atenderte!</h2>
        <form className={Style.form} onSubmit={handleSubmit} id="contactForm">
          <input
            className={Style.input}
            id="name"
            type="text"
            placeholder="Nombre"
            required
          />
          <br />
          <input
            className={Style.input}
            id="email"
            type="email"
            placeholder="Correo"
            required
          />
          <br />
          <input
            className={Style.input}
            id="subject"
            type="text"
            placeholder="Asunto"
          />
          <br />
          <textarea
            className={Style.input}
            id="message"
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
            />{" "}
            <label htmlFor={"check"}>Acepto{" "}
              <a href="/terminosycondiciones" className={Style.link}>
                Términos y Condiciones
              </a>{" "}
              y{" "}
              <a href="/politicadeprivacidad" className={Style.link}>
                Política de Privacidad.
              </a></label>
          <Send type="submit" />
        </form>
        <br />
      </div>
    </div>
  );
};

export default Contact;
