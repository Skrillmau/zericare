import React, { Component } from "react";
import FormularioHistoria from "../Componentes/FormularioHistoria/FormularioHistoria";
import { connect } from "react-redux";
import * as actionCreators from "../Store/Actions/";
import Spinner from "../Componentes/Spinner/Spinner";
import NotFound from "../Pages/NotFound";

class AñadirHistoria extends Component {
  state = {
    isUserLoggedIn: this.props.isUserLoggedIn,
    tipo:"",
    uid: ""
  };
  componentDidMount() {
    console.log(this.props.uid);
    let userSession = localStorage.getItem("userSession");
    userSession = JSON.parse(userSession);
    const { tipo } = userSession;
    const {id} = this.props.match.params;
    this.setState({tipo,uid:id})
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
  render() {
    if (!this.state.usuario) return <Spinner />;
    else if(this.state.tipo!=="Medico") return<NotFound />
    return (
      <div>
        <FormularioHistoria id={this.state.uid}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AñadirHistoria);
