import React, { PureComponent } from 'react'

class Tarjeta extends PureComponent {

    render() {
        const l = {
            main: {
                
                textAlign:"center"
            },

            titulo: {
                fontFamily: "Arial",
                color:"white",
                fontSize:"30px",
                fontWeight:"bold"
            },

            descripcion: {
                fontFamily: "Arial",
                color:"white",
                fontSize:"25px"
            },

            image: {
                resizeMode: "contain",
                height: "100px",
                width: "100px"
            },

            a:{
                textDecoration:"none"
            }
        }

        return (
            <div style={l.main}>
                <a style={l.a} href='#'>
                    <img src={"https://images.squarespace-cdn.com/content/v1/58126462bebafbc423916e25/1490212943759-5AVQSBMUSU12111CKAYM/ke17ZwdGBToddI8pDm48kLmPpDk8NNLTfzZZGx3GZsJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyCBjXeCI3d3338jb41ICgoxR5g4nC92D1NdzCf7Ef-hlEhDIcVK1aWwv7MA3UtewA/image-asset.png"} style={l.image} alt='Producto' />
                    <p style={l.titulo}>
                        {this.props.tarjeta}
                    </p>
                    <p style={l.descripcion}>
                        {this.props.descripcion}
                    </p>
                </a>
            </div>
        )
    }
}

export default Tarjeta