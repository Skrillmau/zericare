import React, { Component } from 'react';
import Medicamento from '../Medicamento/Medicamento';


class OrdenCompleta extends Component {
    
    render() {
        console.log(this.props.orden);
        var pacientes = Object.values(this.props.orden).map(function (obj) {
            return obj;
          });
        return (
            <div>
                {pacientes.map((item,i)=>{
                    return(
                   <Medicamento medicamento={item}/>
                    )
                })}
                
            </div>
        );
    }
}

export default OrdenCompleta;