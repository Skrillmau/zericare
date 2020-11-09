import { StylesProvider } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import Button from "../Button/txt/txtButton";
import Style from "./FormularioPaciente.css";
import Icon from "@mdi/react";
import Swal from "sweetalert2";
import { mdiWindowClose } from "@mdi/js";
import { connect } from "react-redux";
import * as actionCreators from "../../Store/Actions/";

const FormularioPaciente = (props) => {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [isHovered, setHovered] = useState("");

  useEffect(() => {
    if(props.error!==''){
      console.log(props.error);
      Swal.fire({
        title: "Error al registrar el paciente",
        text: props.error,
        icon: "error",
        confirmButtonColor: "#CE0058",
      }).then( (result) => {
				props.onClearError();
			});;
      
    }
  });
  const thumbs = files.map((file, i) => (
    <div
      className={Style.thumb}
      key={`thumb-${i}`}
      onMouseEnter={() => {
        setHovered(i);
      }}
      onMouseLeave={() => {
        setHovered("");
      }}
    >
      <div className={Style.thumbInner}>
        <div
          className={isHovered === i ? Style.deleteImg : Style.hide}
          onClick={() => deleteImg(i)}
        >
          <Icon
            path={mdiWindowClose}
            size={1}
            title="Eliminar imagen"
            color="#06b5ef"
          />
        </div>

        <img
          src={file}
          className={Style.img}
          onError={(e) => {
            e.target.onerror = null;
            console.log(e);
          }}
        />
      </div>
    </div>
  ));
  const prettier = (data) => {
    let newImages = data.map((file) => {
      let preview = URL.createObjectURL(file);

      return { preview };
    });

    return newImages;
  };
  async function deleteImg(index) {
    setFiles([...files.slice(0, index), ...files.slice(index + 1)]);
    setImages([...images.slice(0, index), ...images.slice(index + 1)]);
  }
  async function onDrop(acceptedFiles) {
    console.log(acceptedFiles);
    if (acceptedFiles.length === 0) {
      return;
    } else if (acceptedFiles.length > 0 && files.length < 3) {
      let im = prettier(acceptedFiles);
      console.log(im);
      im.map((img) => {
        setFiles([...files, img.preview]);
      });

      acceptedFiles.map((file) => {
        setImages([...images, file]);
      });
    } else {
      Swal.fire({
        title: "Maximo de imagenes insertadas",
        text: "por favor elimine una imagen antes de añadir una nueva",
        icon: "error",
        confirmButtonColor: "#CE0058",
      });
    }
  }
  const handleSubmit = (e) => {
    let today = new Date().toLocaleDateString();
    e.preventDefault();
    let user = {
      nombre: e.target.name.value,
      apellido: e.target.apellido.value,
      sexo: e.target.sexo.value,
      ocupacion: e.target.ocupacion.value,
      email: e.target.correo.value,
      password: generatePassword(),
      tipo: "Paciente",
      registro: today,
    };
    console.log(images[0]);
    props.onRegister(user, props.uid, images[0]);

    Swal.fire({
      title: "Paciente creado correctamente",
      text: "El paciente se ha registrado correctamente",
      icon: "success",
      confirmButtonColor: "#06b5ef",
    }).then((result)=>{
      props.history.push(`/info/${props.uid}`);
    });
  };
  function generatePassword() {
    var length = 8,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  return (
    <div className={Style.item2}>
      <h3 className={Style.subtitulo}>Agregar Paciente</h3>
      <form className={Style.form} onSubmit={handleSubmit} id="contactForm">
        <div className={Style.grid}>
          <div>
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
            <input
              className={Style.input}
              name="ocupacion"
              rows="10"
              placeholder="Ocupación"
              required
            />
            <br />

            <input
              className={Style.input}
              name="correo"
              rows="10"
              placeholder="Correo"
              required
            />
            <br />
          </div>
          <Dropzone onDrop={onDrop}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps({ className: Style.dropzone })}>
                  <input {...getInputProps()} />
                  <p>Agregar imagenes</p>
                </div>
                <aside className={Style.thumbsContainer}>{thumbs}</aside>
              </section>
            )}
          </Dropzone>
        </div>
        <Button color={"blue"} type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (user, uid, image) =>
      dispatch(actionCreators.Register(user, uid, image)),
    onClearError: () => dispatch(actionCreators.clearError()),
  };
};

const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.authStore.isUserLoggedIn,
    uid: state.authStore.user.uid,
    error: state.errorStore.error,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormularioPaciente);
