import React, { PureComponent } from 'react'
import classes from './Titulo.css'
class Titulo extends PureComponent {
    

    render() {
        return (
            <div>
                <h1 className={classes.title}>
                    {this.props.Titulo}
                </h1>
            </div>
        )
    }
}

export default Titulo