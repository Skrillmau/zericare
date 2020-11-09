import React, { Component } from "react";
import EditarPerfil from "../Componentes/EditarPerfil/EditarPerfil";
import { connect } from "react-redux";
import * as actionCreators from "../Store/Actions/";
import Spinner from "../Componentes/Spinner/Spinner";
import NotFound from "../Pages/NotFound";

class EditPerfil extends Component {
  state = {
    isUserLoggedIn: this.props.isUserLoggedIn,
    tipo: "",
    usuario:{},
    uid: this.props.uid,
    ids:[]
  };
  componentDidMount() {
    console.log(this.props.uid);
    let userSession = localStorage.getItem("userSession");
    userSession = JSON.parse(userSession);
    const { tipo } = userSession;
    
    const {id}=this.props.match.params 
    const ids = id.split('@');
    this.setState({ tipo,ids });
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
      uid: nextState.uid,
    });
  }
  handleRedirect = (url) => {
    this.props.history.push(url);
  };
  render() {
    if (!this.props.user) return <Spinner />;
    else if (this.state.tipo !== "Paciente") return <NotFound />;
    return (
      <div>
        <EditarPerfil user={this.props.user} ids={this.state.ids} onRedirect={this.handleRedirect} />
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

export default connect(mapStateToProps, mapDispatchToProps)(EditPerfil);
