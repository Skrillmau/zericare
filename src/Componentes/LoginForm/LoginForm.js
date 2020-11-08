import React, { Component } from "react";
import styles from "../LoginForm/adminlogin.module.css";
import TxtButton from "../Button/txt/txtButton";
class LoginForm extends Component {
  render() {
    return (
      <div className={styles.main}>
        <form onSubmit={this.props.onSubmit}>
          <p className={styles.label}>Usuario</p>
          <input id="user" className={styles.input} type="text" onChange={(e)=>{this.props.onChange(e,'userName')}} />
          <p className={styles.label}>Contraseña</p>
          <input id="pass" className={styles.input} type="password" onChange={(e)=>{this.props.onChange(e,'password')}}/>
          <br />
          <TxtButton color={"blue"} type={"submit"}>Ingresar</TxtButton>
        </form>
      </div>
    );
  }
}

export default LoginForm;
