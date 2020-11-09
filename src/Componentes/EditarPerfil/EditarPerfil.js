import  Button  from '../Button/txt/txtButton';
import React from 'react';
import { Firebase } from "../../config/firebase";
import { Redirect, withRouter } from "react-router-dom";
import Style from './EditarPerfil.module.css'
import BannerImagen from'../BannerImagen/BannerImagen'


const EditarPerfil = (props) => {
  const  handleclick=(e)=>{
      e.preventDefault();
     const {id}=props.match.params 
     const ids = id.split('@');
     console.log(ids);
      let  user={
            nombre:e.target.nombre.value,
            apellido: e.target.apellido.value,
            ocupacion: e.target.ocupacion.value,
            sexo: e.target.sexo.value,
        }
    let userSession = localStorage.getItem("userSession");
    userSession = JSON.parse(userSession);
    const { uid } = userSession;
        let updateUser = Firebase.database().ref('Users/');
        let updatePaciente = Firebase.database().ref(`Users/${ids[1]}/Pacientes/`);
       
       
         updateUser.child(ids[0]).update({'nombre':user.nombre,'apellido':user.apellido,'ocupacion':user.ocupacion,'sexo':user.sexo})
         updatePaciente.child(ids[0]).update({'nombre':user.nombre,'apellido':user.apellido,'ocupacion':user.ocupacion,'sexo':user.sexo})
        props.history.push('/info/'+ids[0]);
    }
    return (
        <div>
              <BannerImagen title="Editar Información Básica">En el siguiente formulario podrás actualizar tu información, esta información será visible por tu médico encargado</BannerImagen>
            <form onSubmit={handleclick} className={Style.form}>
            <input className={Style.input}  type="text"  name="nombre" placeholder="Nuevo nombre" ></input>
            <input className={Style.input}  type="text" name ="apellido" placeholder="Nuevo apellido"></input>
            <input className={Style.input} type="text" name="ocupacion" placeholder="Nueva ocupación"></input>
            <input className={Style.input} type="text" name="sexo" placeholder="Nuevo sexo (?)"></input>
            <br></br>
            <Button color="blue" >Guardar</Button>
            </form>
        </div>
    );
};

export default withRouter(EditarPerfil);