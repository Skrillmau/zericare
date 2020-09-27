import React, { PureComponent } from 'react'

class Titulo extends PureComponent {
    

    render() {
        const l={
            main:{
                
            },

            title:{
                fontFamily:"Arial",
                margin:"10%",

            }
        }
        return (
            <div style={l.main}>
                <h1 style={l.title}>
                    {this.props.Titulo}
                </h1>
            </div>
        )
    }
}

export default Titulo