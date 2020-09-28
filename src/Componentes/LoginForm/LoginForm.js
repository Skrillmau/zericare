import React, { Component } from 'react';
import styles from "../LoginForm/adminlogin.module.css";
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
				<button className={styles.button} type={"submit"}>
					Ingresar
				</button>
			</form>
            </div>
        );
    }
}

export default LoginForm;