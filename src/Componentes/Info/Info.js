import React, { Component } from "react";
import Paragraph from "../Paragraph/Paragraph";
import classes from "./Info.module.css";
import Button from "../Button/txt/txtButton";

var QRCode = require('qrcode.react');
class Info extends Component {
  render() {
    if(this.props.tipo=="Paciente"){
    return (
      <div className={classes.block}>
        <div className={classes.superflex}>
          
            <div className={classes.gridContainer}>
              <div className={classes.gridItem1}>
                <img className={classes.imagen} src={this.props.imagen} />
              </div>
              <div className={classes.gridItem2}>
                Nombre:
            <Paragraph contenido={this.props.nombre} clase={"importante"} />
            Apellido:
            <Paragraph contenido={this.props.apellido} clase={"importante"} />
            Registro:
            <Paragraph contenido={this.props.id} clase={"importante"} />
            Sexo: <Paragraph contenido={this.props.sexo} clase={"importante"} />
            Ocupacion:
            <Paragraph contenido={this.props.ocupacion} clase={"importante"} />
              </div>
            </div>
          <div className={classes.gridItem3}>
            <QRCode size="420" value="http://facebook.github.io/react/" />
       
          </div>
         
        </div>
        <Button color="blue">Editar Perfil</Button>
      </div>
      

    );}
    else{
      return (
        <div className={classes.block}>
          <div className={classes.superflex}>
            
              <div className={classes.gridContainer}>
                <div className={classes.gridItem1}>
                  <img className={classes.imagen} src={this.props.imagen} />
                </div>
                <div className={classes.gridItem2}>
                  Nombre:
              <Paragraph contenido={this.props.nombre} clase={"importante"} />
              Apellido:
              <Paragraph contenido={this.props.apellido} clase={"importante"} />
              Registro:
              <Paragraph contenido={this.props.id} clase={"importante"} />
              Sexo: <Paragraph contenido={this.props.sexo} clase={"importante"} />
              Ocupacion:
              <Paragraph contenido={this.props.ocupacion} clase={"importante"} />
                </div>
              </div>
          </div>
        </div>
  
      );
    }
  
  }
}

export default Info;
