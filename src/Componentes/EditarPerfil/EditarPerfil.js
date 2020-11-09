import  Button  from '../Button/txt/txtButton';
import React from 'react';
import { Firebase } from "../../config/firebase";



const EditarPerfil = (props) => {
  const  handleclick=(e)=>{
      e.preventDefault();
     const {id}=props.match.params 
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
        let updatePaciente = Firebase.database().ref(`Users/${uid}/Pacientes/`);
       
       
         updateUser.child(id).update({'nombre':user.nombre,'apellido':user.apellido,'ocupacion':user.ocupacion,'sexo':user.sexo})
         updatePaciente.child(id).update({'nombre':user.nombre,'apellido':user.apellido,'ocupacion':user.ocupacion,'sexo':user.sexo})
       
      
        

    }
    return (
        <div>
            <form onSubmit={handleclick}>
            <input type="text"  name="nombre" placeholder="Nuevo nombre"></input>
            <input type="text" name ="apellido" placeholder="Nuevo apellido"></input>
            <input type="text" name="ocupacion" placeholder="Nueva ocupación"></input>
            <input type="text" name="sexo" placeholder="Nuevo sexo (?)"></input>
            <Button color="blue" >Guardar</Button>
            </form>
        </div>
    );
};

export default EditarPerfil;