import { Button } from '@material-ui/core';
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import Buttom from "../Button/txt/txtButton.js";
import Style from './FormularioPaciente.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../Store/Actions/';



const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};


const FormularioPaciente = (props) => {
 
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ accept: 'image/*' });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  const handleSubmit = (e) =>{
    let today = new Date().toLocaleDateString()
    e.preventDefault();    
    let user= {
      nombre: e.target.name.value,
      apellido: e.target.apellido.value,
      sexo: e.target.sexo.value,
      ocupacion: e.target.ocupacion.value,
      email: e.target.correo.value,
      password: generatePassword(),
      tipo:"Paciente",
      registro: today
    }
    console.log(user);
    props.onRegister(user,props.uid)

  }
  function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
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
          <div className={Style.input}>
            <div className="container">
              <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </div>
          </div>
          <Button color={"blue"} type="submit" >Agregar</Button>
        </div>
      </form>
    </div>




  );
};


const mapDispatchToProps = dispatch => {
  return {
    onRegister: (user,uid) => dispatch( actionCreators.Register(user,uid))
  };
};

const mapStateToProps = state => {
  return {
      isUserLoggedIn: state.authStore.isUserLoggedIn,
      uid:state.authStore.user.uid,
      error:state.errorStore.error,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormularioPaciente);