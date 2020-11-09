import React, { Component } from "react";
import Paragraph from "../Paragraph/Paragraph";
import classes from "./Info.module.css";
import Button from "../Button/txt/txtButton";
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

var QRCode = require('qrcode.react');
class Info extends Component {
  render() {
    if (this.props.usuario.tipo == "Paciente") {
      return (
        <div className={classes.block}>
          <div className={classes.superflex}>

            <div className={classes.gridContainer}>
              <div className={classes.gridItem1}>
                <img className={classes.imagen} src={this.props.usuario.imagen} />
              </div>
              <div className={classes.gridItem2}>
                Nombre:
            <Paragraph contenido={this.props.usuario.nombre} clase={"importante"} />
            Apellido:
            <Paragraph contenido={this.props.usuario.apellido} clase={"importante"} />
            Registro:
            <Paragraph contenido={this.props.usuario.id} clase={"importante"} />
            Sexo: <Paragraph contenido={this.props.usuario.sexo} clase={"importante"} />
            Ocupacion:
            <Paragraph contenido={this.props.usuario.ocupacion} clase={"importante"} />
              </div>
            </div>
            <div className={classes.gridItem3}>
              <QRCode size="420" value={"localhost:3000/Paciente/"+this.props.usuario.uid} />
            </div>



          </div>
          
          <div className={classes.addBoton}>
          <Button color="blue" onclick={this.props.onclick}><EditOutlinedIcon/></Button>
          </div>
        </div>


      );
    }
    else {
      return (
        <div className={classes.block}>
          <div className={classes.superflex}>

            <div className={classes.gridContainer}>
              <div className={classes.gridItem1}>
                <img className={classes.imagen} src={this.props.usuario.imagen} />
              </div>
              <div className={classes.gridItem2}>
                Nombre:
              <Paragraph contenido={this.props.usuario.nombre} clase={"importante"} />
              Apellido:
              <Paragraph contenido={this.props.usuario.apellido} clase={"importante"} />
              Registro:
              <Paragraph contenido={this.props.usuario.registro} clase={"importante"} />
              Sexo: <Paragraph contenido={this.props.usuario.sexo} clase={"importante"} />
              Ocupacion:
              <Paragraph contenido={this.props.usuario.ocupacion} clase={"importante"} />
              </div>
            </div>
          </div>
        </div>

      );
    }

  }
}

export default Info;
