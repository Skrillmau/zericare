import React, { Component } from 'react';
import LoginForm from '../Componentes/LoginForm/LoginForm'
import { Redirect, withRouter } from "react-router-dom";
import swal from "sweetalert2";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            logedUser: null,
            user:{
                email:"paciente@correo.com",
                pass:"12345",
                id:0
            }
        };
    }

    componentDidMount(){
        const user = localStorage.getItem("user");
        if(user){
            this.setState({logedUser:user});
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(e.target.user.value);
        if(e.target.user.value===this.state.user.email && e.target.pass.value===this.state.user.pass){
            this.setState({logedUser:this.state.user.id});
            localStorage.setItem("user",this.state.user.id);
            this.props.history.push(`/info/${0}`);
        }else{
            swal.fire({
                title: "Credenciales incorrectos",
                icon: "error",
                confirmButtonColor: "#CE0058",
              });
        }
    } 

    render() {
        if(this.state.logedUser){
            return <Redirect to={`/info/${this.state.logedUser}`}/>
        }else{
            return (
            <div>
                <LoginForm onSubmit={this.handleSubmit}/>	
       
            </div>
        );}
    }
}

export default withRouter(Login);