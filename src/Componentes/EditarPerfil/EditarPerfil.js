import Button from "../Button/txt/txtButton";
import React, { useState } from "react";
import { Firebase } from "../../config/firebase";
import { Redirect, withRouter } from "react-router-dom";
import Style from "./EditarPerfil.module.css";
import BannerImagen from "../BannerImagen/BannerImagen";

const EditarPerfil = (props) => {
  const [nombre, setNombre] = useState(props.user.nombre);
  const [ocupacion, setOcupacion] = useState(props.user.ocupacion);
  const [apellido, setApellido] = useState(props.user.apellido);
  const [sexo, setSexo] = useState(props.user.sexo);
  const handleclick = (e) => {
    e.preventDefault();

    const ids = props.ids;
    console.log(ids);
    let user = {
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      ocupacion: e.target.ocupacion.value,
      sexo: e.target.sexo.value,
    };
    let userSession = localStorage.getItem("userSession");
    userSession = JSON.parse(userSession);
    const { uid } = userSession;
    let updateUser = Firebase.database().ref("Users/");
    let updatePaciente = Firebase.database().ref(`Users/${ids[1]}/Pacientes/`);

    updateUser
      .child(ids[0])
      .update({
        nombre: user.nombre,
        apellido: user.apellido,
        ocupacion: user.ocupacion,
        sexo: user.sexo,
      });
    updatePaciente
      .child(ids[0])
      .update({
        nombre: user.nombre,
        apellido: user.apellido,
        ocupacion: user.ocupacion,
        sexo: user.sexo,
      });
    props.history.push("/info/" + ids[0]);
  };
  return (
    <div>
      <BannerImagen title="Editar Información Básica">
        En el siguiente formulario podrás actualizar tu información, esta
        información será visible por tu médico encargado
      </BannerImagen>
      <form onSubmit={handleclick} className={Style.form}>
        <input
          className={Style.input}
          type="text"
          name="nombre"
          placeholder="Nuevo nombre"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
        <input
          className={Style.input}
          type="text"
          name="apellido"
          placeholder="Nuevo apellido"
          value={apellido}
          onChange={(e) => {
            setApellido(e.target.value);
          }}
        />
        <input
          className={Style.input}
          type="text"
          name="ocupacion"
          placeholder="Nueva ocupación"
          value={ocupacion}
          onChange={(e) => {
            setOcupacion(e.target.value);
          }}
        />
        <input
          className={Style.input}
          type="text"
          name="sexo"
          placeholder="Nuevo sexo (?)"
          value={sexo}
          onChange={(e) => {
            setSexo(e.target.value);
          }}
        />
        <br></br>
        <Button color="blue">Guardar</Button>
      </form>
    </div>
  );
};

export default withRouter(EditarPerfil);
