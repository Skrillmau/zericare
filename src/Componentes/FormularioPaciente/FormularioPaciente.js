import { Button } from '@material-ui/core';
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import Buttom from "../Button/txt/txtButton.js";
import Style from './FormularioPaciente.css';



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

  return (

    <div className={Style.item2}>
      <h3 className={Style.subtitulo}>Agregar Paciente</h3>
      <form className={Style.form} onSubmit="" id="contactForm">
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
              name="Sexo"
              type="text"
              placeholder="Sexo "
            />
            <br />
            <input
              className={Style.input}
              name="Ocupación"
              rows="10"
              placeholder="Ocupación"
              required
            />
            <br />

            <input
              className={Style.input}
              name="Correo"
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

export default FormularioPaciente;