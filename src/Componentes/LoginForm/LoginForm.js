import React, { Component } from 'react';
import styles from "../LoginForm/adminlogin.module.css";
import  TxtButton from '../txt/txtButton'
class LoginForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit="">
				<p className={styles.label}>Usuario</p>
				<input className={styles.input} type="text" />
				<p className={styles.label}>Contraseña</p>
				<input className={styles.input} type="password" />
				<br />
				<TxtButton color={"red"}>Ingresar</TxtButton>
			</form>
            </div>
        );
    }
}

export default LoginForm;