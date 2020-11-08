import React, { Component } from 'react';
import LoginForm from '../Componentes/LoginForm/LoginForm'
import { Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Swal from "sweetalert2";
import * as actionCreators from '../Store/Actions/';
class Login extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        userName: '',
        password: '',
        uid:'',
        error:'',
    }

    componentDidMount(){
        const user = localStorage.getItem("user");
        if(user){
            this.setState({logedUser:user});
        }
    }
    componentDidUpdate () {
        if (this.state.isUserLoggedIn) {
            //this.props.history.push('/');
        }else if(this.state.error!==''){
            Swal
			.fire({
				title: "Ha ocurrido un error",
				text: this.state.error,
				icon: "error",
				confirmButtonText: "Entendido",
				
			})
			.then( (result) => {
				this.props.onClearError();
			});
        }
    }
    componentWillReceiveProps (nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn,
            uid:nextState.uid,
            error: nextState.error,
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const userData = {
            email: this.state.userName,
            password: this.state.password
        };

        this.props.onUserLogin(userData, () => {
            console.log(this.state.type);
            this.props.history.push(`/info/${this.state.uid}`);
        });
       
    } 
    handleChange = (e,target)=>{
        var updatedState = {
            ...this.state
        }
        updatedState[target] = e.target.value;
        this.setState({
            userName: updatedState.userName,
            password: updatedState.password
          });
    }

    render() {
        if(this.state.logedUser){
            //return <Redirect to={`/info/${this.state.uid}`}/>
        }else{
            return (
            <div>
                <LoginForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>	
       
            </div>
        );}
    }
}
const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authStore.isUserLoggedIn,
        uid:state.authStore.user.uid,
        loadingAuth: state.authStore.loadingAuth,
        error:state.errorStore.error,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onUserLogin: (authData, onSuccessCallback) => dispatch(actionCreators.logIn(authData, onSuccessCallback)),
        onClearError: () => dispatch(actionCreators.clearError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);