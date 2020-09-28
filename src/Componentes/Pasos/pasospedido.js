import React, { Component } from "react";
import Fade from 'react-reveal'
import imagenPasos from '../../assets/PasosPedido.png'

class Pasospedido extends Component {
  render() {
    const l = {
      main: { width: "100%", padding: "3%" },
      title: {
        fontSize: "50px",
        fontFamily: "Futura",
        textAlign: "center",
        margin:'0px',
        padding:'2.5%',
        fontWeight:'bold'
      },
      grid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 25%)",
        padding: "0% 0%",
      },
      item: {
        columns: "span 1",
        fontFamily: "Futura",
        textAlign: "center",
        fontSize: "24px",
      },
      texto: { margin: "0%", color: "#4e5757", padding: "0% 15%" },
      texto2: { margin: "auto", color: "#4e5757", padding: "0% 15%" },
      image: {
        width: "94%",
        padding: "0% 3%",
        margin: "auto",
      },
      c4: { gridColumns: "span 4" },
    };
    return (
      <div>
                <div style={l.main}>
                  <h1 style={l.title}>{this.props.titulo}</h1>
                  <Fade left delay={200}>
                    <img
                        style={l.image}
                        src= {imagenPasos}
                        alt="Pasos Pedidos"
                    />
                  </Fade>
                  <div style={l.grid}>
                    <div style={l.item}>
                      <p style={l.texto2}>{this.props.paso1}</p>
                    </div>
                    <div style={l.item}>
                      <p style={l.texto}>{this.props.paso2}</p>
                    </div>
                    <div style={l.item}>
                      <p style={l.texto}>{this.props.paso3}</p>
                    </div>
                    <div style={l.item}>
                      <p style={l.texto}>{this.props.paso4}</p>
                    </div>
                  </div>
                </div>
      </div>
    );
  }
}

export default Pasospedido;
