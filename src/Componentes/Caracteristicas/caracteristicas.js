import React, { Fragment } from "react";


class Caracteristicas extends React.Component {
  render() {
    const l = {
      main: {
        width: "100%",
        position: "block",
        margin: "auto",
        textAlign: "center",
        padding: "3%",
      },
      title: {
        fontFamily: "Futura",
        fontSize: "90px",
        fontWeight: "bold",
        margin: "auto",
        textAlign: "center",
        padding: "2.5%",
      },
      grid: {
        width: "80%",
        display: "grid",
        gridTemplateColumns: "repeat(2,50%)",
        margin: "auto",
        padding:'2.5% none'
      },
      item1: {
        padding: "5%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        columns: "span 1",
        background: "#fbfbfb",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
      },
      item1r: {
        padding: "5%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        columns: "span 1",
        background: "#fa93c1",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
        zIndex: "1",
      },
      item1v: {
        padding: "5%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        columns: "span 1",
        background: "#d5f78b",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
        zIndex: "1",
      },
      item2: {
        padding: "5%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "40% 60%",
        columns: "span 1",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
      },
      item2a: {
        padding: "5%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "40% 60%",
        columns: "span 1",
        background: "#9fe9f8",
        boxShadow: "1px 0px 5px -1px rgba(0,0,0,0.31)",
        zIndex: "1",
      },
      info: { width: "100%", columns: "span 1", margin: "auto", padding: "5%" },
      imagen: {
        width: "60%",
        columns: "span 1",
        margin: "auto",
        padding: "5%",
      },
      txt: {
        textAlign: "left",
        lineHeight: "1",
        fontFamily: "Futura",
        fontSize: "16px",
      },
      tit: {
        textAlign: "left",
        lineHeight: "1",
        fontFamily: "Futura",
        fontSize: "24px",
      },
      txtd: {
        textAlign: "right",
        lineHeight: "1",
        fontFamily: "Futura",
        fontSize: "16px",
      },
      titd: {
        textAlign: "right",
        lineHeight: "1",
        fontFamily: "Futura",
        fontWeight: "bold",
        fontSize: "24px",
      },
    };
    return (
      <div>
          <div style={l.main}>
            <h1 style={l.title}>Ventajas</h1>
            <div style={l.grid}>
              <div style={l.item1r}>
                <div style={l.info}>
                  <h2 style={l.tit}>{this.props.titulo1}</h2>
                  <p style={l.txt}>{this.props.texto1}</p>
                </div>
                <img
                  src=""
                  alt="imagen"
                  style={l.imagen}
                />
              </div>
              <div style={l.item2}>
                <img
                  src=""
                  alt="imagen"
                  style={l.imagen}
                />
                <div style={l.info}>
                  <h2 style={l.titd}>{this.props.titulo2}</h2>
                  <p style={l.txtd}>{this.props.texto2}</p>
                </div>
              </div>
              <div style={l.item1}>
                <div style={l.info}>
                  <h2 style={l.tit}>{this.props.titulo3}</h2>
                  <p style={l.txt}>{this.props.texto3}</p>
                </div>
                <img
                  src=""
                  alt="imagen"
                  style={l.imagen}
                />
              </div>
              <div style={l.item2a}>
                <img
                  src=""
                  alt="imagen"
                  style={l.imagen}
                />
                <div style={l.info}>
                  <h2 style={l.titd}>{this.props.titulo4}</h2>
                  <p style={l.txtd}>{this.props.texto4}</p>
                </div>
              </div>
              <div style={l.item1v}>
                <div style={l.info}>
                  <h2 style={l.tit}>{this.props.titulo5}</h2>
                  <p style={l.txt}>{this.props.texto5}</p>
                </div>
                <img
                  src=""
                  alt="imagen"
                  style={l.imagen}
                />
              </div>
              <div style={l.item2}>
                <img src="" alt="imagen" style={l.imagen} />
                <div style={l.info}>
                  <h2 style={l.titd}>{this.props.titulo6}</h2>
                  <p style={l.txtd}>{this.props.texto6}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Caracteristicas;
