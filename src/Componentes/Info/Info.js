import React, { Component } from 'react';
import Paragraph from '../Paragraph/Paragraph'

class Info extends Component {
    render() {
        return (
            <div>
                <img src="https://scontent.fbog15-1.fna.fbcdn.net/v/t31.0-8/14884585_10210027915470881_2657862723931510731_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeGUkrbiZ1q_MQcwBkeRD-2soh20xj8NoaqiHbTGPw2hqmCwDpGvYlKNwwwO9muy7J0&_nc_ohc=ZhMBwWz-NAIAX83DIEF&_nc_ht=scontent.fbog15-1.fna&oh=ebfc5664250253db60ff57e5452f2fa2&oe=5F976321"/>
                <div>
               Nombre: <Paragraph contenido= {this.props.Nombre} clase={"importante"}/>
               Apellido: <Paragraph contenido= {this.props.apellido} clase={"importante"}/>
               Registro: <Paragraph contenido= {this.props.id} clase={"importante"}/>
               Sexo: <Paragraph contenido= {this.props.sexo} clase={"importante"}/>
             Ocupacion:<Paragraph contenido= {this.props.ocupacion} clase={"importante"}/>
             </div>
            </div>
        );
    }
}

export default Info;