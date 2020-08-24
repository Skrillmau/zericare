import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button';

class AñadirCarrito extends PureComponent {
    
    render() {
        const l = {
            main: {
                
                textAlign:"center"
            },
        }
        return (
            <div style={l.main}>
                <Button variant="contained" color="primary">
                    Agregar al carrito
                </Button>
            </div>
        )
    }
}

export default AñadirCarrito