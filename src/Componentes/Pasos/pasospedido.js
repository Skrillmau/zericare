import React, { Component } from "react";
import Fade from "react-reveal";
import imagenPasos from "../../assets/PasosPedido.png";
import styles from './pasospedido.module.css'

class Pasospedido extends Component {
  render() {
    return (
      <div>
        <div className={styles.main}>
          <h1 className={styles.title}>{this.props.titulo}</h1>
          <Fade left delay={200}>
            <img className={styles.image} src={imagenPasos} alt="Pasos Pedidos" />
          </Fade>
          <div className={styles.grid}>
            <div className={styles.item}>
              <p className={styles.texto2}>{this.props.paso1}</p>
            </div>
            <div className={styles.item}>
              <p className={styles.texto}>{this.props.paso2}</p>
            </div>
            <div className={styles.item}>
              <p className={styles.texto}>{this.props.paso3}</p>
            </div>
            <div className={styles.item}>
              <p className={styles.texto}>{this.props.paso4}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pasospedido;
