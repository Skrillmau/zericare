import React, { PureComponent } from 'react'
import classes from './Tarjeta.css'
import AñadirCarrito from '../AñadirCarrito';



class Tarjeta extends PureComponent {

    render() {
        const l = {
            
            image: {
                resizeMode: "contain",
                height: "100px",
                width: "100px"
            },
        }

        return (
            <div className={classes.main}>
                <a classname={classes["a"]}>
                    <img src={"https://images.squarespace-cdn.com/content/v1/58126462bebafbc423916e25/1490212943759-5AVQSBMUSU12111CKAYM/ke17ZwdGBToddI8pDm48kLmPpDk8NNLTfzZZGx3GZsJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyCBjXeCI3d3338jb41ICgoxR5g4nC92D1NdzCf7Ef-hlEhDIcVK1aWwv7MA3UtewA/image-asset.png"} style={l.image} alt='Producto' />
                    <p className={classes["Titulo"]}>
                        {this.props.tarjeta}
                    </p>
                    <p className={classes.descripcion}>
                        {this.props.descripcion}
                    </p>
                </a>
                <AñadirCarrito></AñadirCarrito>
            </div>
        )
    }
}

export default Tarjeta