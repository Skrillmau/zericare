import React, { Component } from 'react';
import Paragraph from '../Paragraph/Paragraph'
import Txt from '../Button/txt/txtButton'
import classes from './Historia.module.css'
class Historia extends Component {
    render() {
        return (
            <div className={classes.block}>
                <div className={classes.gridContainer}>
                    <div className={classes.gridItem1}>
                        Antecedentes Patológicos: <Paragraph contenido={this.props.patologicos} clase={"importante"} />
                    </div>
                    <div className={classes.gridItem1}>
                        Antecedentes no Patológicos: <Paragraph contenido={this.props.npatologicos} clase={"importante"} />
                    </div>
                    <div className={classes.gridItem1}>
                        Antecedentes familiares: <Paragraph contenido={this.props.familiares} clase={"importante"} />
                    </div>
                    <div className={classes.gridItem1}>
                        Antecedentes Gineco-obstétricos: <Paragraph contenido={this.props.go} clase={"importante"} />
                    </div>
                    <div className={classes.gridItem1}>
                        PEEA última consulta:<Paragraph contenido={this.props.consulta} clase={"importante"} />
                    </div>
                    <div className={classes.gridItem1}>
                        DNR: <Paragraph contenido={this.props.dnr} clase={"importante"} />
                    </div>
                    <div className={classes.gridItem1}>
                        Exploración Física:<Paragraph contenido={this.props.ef} clase={"importante"} />
                    </div>




                </div>


            </div>
        );
    }
}

export default Historia;