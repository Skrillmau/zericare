import React, { Component } from "react";
import Info from "../Componentes/Info/Info";
import Historia from "../Componentes/Historia/Historia";
import classes from "../Pages/Perfil/Perfil.css";
import { Redirect, withRouter } from "react-router-dom";
import BannerText from "../Componentes/BannerText/BannerText";
import { connect } from "react-redux";
import ListaPacientes from "../Componentes/ListaPacientes/ListaPacientes";

import * as actionCreators from "../Store/Actions/";

class Perfil extends Component {
  state = {
    isUserLoggedIn: this.props.isUserLoggedIn,
    usuario: {},
  };

  componentDidMount() {
    if (!this.state.isUserLoggedIn) {
      console.log("hola");
      this.props.history.push("/login");
    }
    const { id } = this.props.match.params;
    this.props.fetchUser(id);
  }

  componentWillReceiveProps(nextState) {
    this.setState({
      isUserLoggedIn: nextState.isUserLoggedIn,
      usuario: nextState.user,
    });
  }
  handleLogout = () => {
    console.log(this.props);
    this.props.onlogOut();
    this.props.history.push(`/login`);
  };
  onUserLoggedIn = () => {
    //if (this.state.usuario.Tipo == "Paciente") {
      return (
        <div className={classes.block}>
          <h1>Perfil</h1>
          <Info
            logout={this.handleLogout}
            imagen={this.state.usuario.Imagen}
            nombre={this.state.usuario.Nombre}
            apellido={this.state.usuario.Apellido}
            id={this.state.usuario.Registro}
            sexo={this.state.usuario.Sexo}
            ocupacion={this.state.usuario.Ocupacion}
          />
          <BannerText title="Tu historia clínica">
            En el listado a continuación, podrás ver tus historial médico más
            reciente (recuerda darle tu código al médico encargado de tu
            consulta para que pueda actualizar tu historial)
          </BannerText>
          <Historia
            patologicos={this.state.usuario.patologicos}
            npatologicos={this.state.usuario.nopatologicos}
            familiares={this.state.usuario.familiares}
            go={this.state.usuario.gineco}
            consulta={this.state.usuario.PEEA}
            dnr={this.state.usuario.dnr}
            ef={this.state.usuario.fisica}
          />
          <BannerText title="Tus órdenes">
            En el listado a continuación, podrás ver las órdenes provistas por
            tu médico asignado (recuerda confirmar cada orden por separado para
            poder autorizar el envío de las misma)
          </BannerText>
          <p>Insertar órdenes de firebase</p>
        </div>
      );
   /* } else if (this.state.usuario.Tipo == "Medico") {
      return (
        <div>
          <Info
            logout={this.handleLogout}
            imagen={this.state.usuario.Imagen}
            nombre={this.state.usuario.Nombre}
            apellido={this.state.usuario.Apellido}
            id={this.state.usuario.Registro}
            sexo={this.state.usuario.Sexo}
            ocupacion={this.state.usuario.Ocupacion}
          />
          <p>Buenas noches</p>

          <div>
            <ListaPacientes />
          </div>
        </div>
      );
    } else {
      return <p>Un momento por favor...</p>;
    }*/
  };
  onUserLoggedOut = ()=>{
    return(<Redirect to="/login"></Redirect>)
  }
  render() {
    return this.state.isUserLoggedIn? this.onUserLoggedIn(): this.onUserLoggedOut();
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
