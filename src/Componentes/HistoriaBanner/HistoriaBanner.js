import React, { Component } from 'react';
import HistoriaCompleta from '../HistoriaCompleta/HistoriaCompleta';
import styles from './HistoriaBanner.module.css'

class HistoriaBanner extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible:false

        }
    }
    handleclick(e){
        e.preventDefault();
        this.setState({
            visible: !this.state.visible
        })

    }
    render() {
        return (
            <div className={styles.banner} >
                <h3 onClick={this.handleclick.bind(this)}>Fecha: {this.props.fecha} </h3>
                <div className={this.state.visible?styles.visible:styles.novisible}>
                <HistoriaCompleta />
                </div>
            </div>
        );
    }
}

export default HistoriaBanner;