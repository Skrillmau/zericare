import React, { Component } from 'react';
import classes from './HistoriaCompleta.module.css'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
class HistoriaCompleta extends Component {
    render() {
        return (
            <div>
                <div>
                    <p className={classes.item}>
                        <KeyboardArrowRightIcon />
                        Antecedentes familiares:

                        </p>
                    <p className={classes.item2}>{this.props.historia.afamiliares}</p>
                </div>

                <div>
                    <p className={classes.item}><KeyboardArrowRightIcon /> PEEA: </p>
                    <p className={classes.item2}>{this.props.historia.peea}</p>
                </div>

                <div>
                    <p className={classes.item}><KeyboardArrowRightIcon /> Exploración física:</p>
                    <p className={classes.item2}>{this.props.historia.efisica}</p>
                </div>

                <div>
                    <p className={classes.item}><KeyboardArrowRightIcon /> Antecedentes no patológicos: </p>
                    <p className={classes.item2}>{this.props.historia.anopatologicos}</p>
                </div>

                <div>
                    <p className={classes.item}><KeyboardArrowRightIcon /> Antecedentes Gineco-Obstétricos:</p>
                    <p className={classes.item2}>{this.props.historia.aginecoobstetricos}</p>
                </div>

                <div>
                    <p className={classes.item}> <KeyboardArrowRightIcon />DNR:</p>
                    <p className={classes.item2}>{this.props.historia.dnr}</p>
                </div>






            </div>
        );
    }
}

export default HistoriaCompleta;