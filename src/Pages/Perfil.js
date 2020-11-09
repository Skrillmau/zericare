import React, { Component } from "react";
import Info from "../Componentes/Info/Info";
import Historia from "../Componentes/Historia/Historia";
import classes from "../Pages/Perfil/Perfil.css";
import { Redirect, withRouter } from "react-router-dom";
import BannerText from "../Componentes/BannerText/BannerText";
import BannerImagen from "../Componentes/BannerImagen/BannerImagen";
import { connect } from "react-redux";
import ListaPacientes from "../Componentes/ListaPacientes/ListaPacientes";
import Spinner from "../Componentes/Spinner/Spinner";
import * as actionCreators from "../Store/Actions/";
import ListaOrdenes from "../Componentes/ListaOrdenes/ListaOrdenes";
import ListaHistorias from "../Componentes/ListaHistorias/ListaHistorias";
import Button from '../Componentes/Button/txt/txtButton'

import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
var QRCode = require('qrcode.react');

class Perfil extends Component {
  state = {
    isUserLoggedIn: this.props.isUserLoggedIn,
    usuario: {
      Pacientes:{},
      Historias:{},
      Ordenes:{}
    },
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchUser(id);
  }
  componentDidUpdate() {
    if (!this.state.isUserLoggedIn) {
      this.props.history.push(`/login`);
    }
  }

  componentWillReceiveProps(nextState) {
    console.log("Next",nextState);
    this.setState({
      isUserLoggedIn: nextState.isUserLoggedIn,
      usuario: {
        ...this.state.usuario,
        ...nextState.user
      },
      isUserLoaded: nextState.isUserLoaded,
    });
  }
  handleLogout = () => {
    console.log(this.props);
    this.props.onlogOut();
    this.props.history.push(`/login`);
  };
  toggleProfile = () => {
    if (this.state.usuario.tipo == "Paciente") {
      return (
        <div className={classes.block}>
          <h1>Perfil</h1>
          <Info
            onclick={()=>this.props.history.push("/editarPerfil/"+this.state.usuario.uid+'@'+this.state.usuario.doctor)}
            tipo="Paciente"
            usuario={this.state.usuario}
            logout={this.handleLogout}
          />
          
         
          <BannerText title="Tus historias clínicas">
            En el listado a continuación, podrás ver tu historial clínico de cada consulta (recuerda darle tu código care a tu médico correspondiente)
          </BannerText>
          <ListaHistorias historias={this.state.usuario.Historias}/>
          <BannerText title="Tus órdenes">
            En el listado a continuación, podrás ver las órdenes provistas por
            tu médico asignado (recuerda confirmar cada orden por separado para
            poder autorizar el envío de las misma)
          </BannerText>
          <ListaOrdenes ordenes={this.state.usuario.Ordenes}/>
         
        </div>
      );
    } else if (this.state.usuario.tipo == "Medico") {
      return (
        <div>
          
          <Info 
            tipo="Medico"
            logout={this.handleLogout}
            usuario={this.state.usuario}
          />
          <br></br>
          <hr></hr>
          <BannerImagen title="Tus pacientes">
            En el listado a continuación, podrás ver el listado listado de los pacientes que están a tu cargo
          </BannerImagen>
          

          
          <div>
            <ListaPacientes  pacientes={this.state.usuario.Pacientes}/>
          </div>
          <div className={classes.addBoton}>
          <Button color="blue" onclick={()=>this.props.history.push("/addPaciente")}><GroupAddOutlinedIcon/></Button>
          </div>
        </div>
      );
    } else {
      return  <Spinner/>;
    }
  };
 
  render() {
    if (!this.state.usuario) return <Spinner/>;
    {console.log(this.state.usuario)}
    return this.toggleProfile();
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.userStore.user,
    isUserLoggedIn: state.authStore.isUserLoggedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(actionCreators.fetchUser(id)),
    onlogOut: () => dispatch(actionCreators.logOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Perfil);
