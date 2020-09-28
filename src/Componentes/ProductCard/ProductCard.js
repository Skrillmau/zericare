import React, { Component } from 'react'
import classes from './ProductCard.module.css'
import {Link} from 'react-router-dom'
import Button from '../Button/txt/txtButton'



class Tarjeta extends Component {

    render() {
        return (
            <div className={classes.main}>
                    <img src={this.props.imagen} className={classes.imagen} alt='Producto' />
                    <p className={classes.titulo}>
                        {this.props.nombre}
                    </p>
                
                <Link to={`/producto/${this.props.id}`} ><Button color={"blue"}>Ver más</Button></Link>
            </div>
        )
    }
}

export default Tarjeta