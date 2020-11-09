import React, { Component } from "react";
import FormularioHistoria from "../Componentes/FormularioHistoria/FormularioHistoria";
import { connect } from "react-redux";
import * as actionCreators from "../Store/Actions/";
import Spinner from "../Componentes/Spinner/Spinner";
import NotFound from "../Pages/NotFound";
import TablaMedicamentos from "../Componentes/TablaMedicamentos/TablaMedicamentos";

class FormularioMedicamento extends Component {
  state = {
    isUserLoggedIn: this.props.isUserLoggedIn,
    tipo: "",
    patientId: "",
  };
  componentDidMount() {
    console.log(this.props.uid);
    let userSession = localStorage.getItem("userSession");
    userSession = JSON.parse(userSession);
    const { tipo } = userSession;
    const { id } = this.props.match.params;
    this.setState({ tipo, patientId: id });
  }

  componentDidUpdate() {
    if (!this.state.isUserLoggedIn) {
      this.props.history.push(`/login`);
    }
  }

  componentWillReceiveProps(nextState) {
    this.setState({
      isUserLoggedIn: nextState.isUserLoggedIn,
      usuario: nextState.user,
      isUserLoaded: nextState.isUserLoaded,
    });
  }
  handleRedirect = (url) => {
    this.props.history.push(url);
  };
  render() {
    if (this.state.tipo !== "Medico") return <NotFound />;
    return (
      <div>
        <TablaMedicamentos onRedirect={this.handleRedirect} id={this.state.patientId} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClearError: () => dispatch(actionCreators.clearError()),
    fetchUser: (id) => dispatch(actionCreators.fetchUser(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.userStore.user,
    isUserLoggedIn: state.authStore.isUserLoggedIn,
    uid: state.authStore.user.uid,
    error: state.errorStore.error,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormularioMedicamento);