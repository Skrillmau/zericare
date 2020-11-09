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
                
                <h3 onClick={this.handleclick.bind(this)}>Fecha: {new Date(this.props.historia.fecha).toLocaleDateString("en-US")} </h3>
                <div className={this.state.visible?styles.visible:styles.novisible}>
                <HistoriaCompleta historia={this.props.historia}/>
                </div>
            </div>
        );
    }
}

export default HistoriaBanner;