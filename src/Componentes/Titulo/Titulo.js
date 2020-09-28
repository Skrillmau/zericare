import React, {Component } from 'react'
import classes from './Titulo.css'
class Titulo extends Component {
    

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