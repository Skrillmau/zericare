import React, { Component } from 'react';
import OrdenCompleta from '../OrdenCompleta/OrdenCompleta';
import styles from './OrdenBanner.module.css'

class OrdenBanner extends Component {
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
                
                <h3 onClick={this.handleclick.bind(this)}>Fecha: {new Date(this.props.fecha).toLocaleDateString("en-US")} </h3>
                <div className={this.state.visible?styles.visible:styles.novisible}>
                <OrdenCompleta orden={this.props.orden}/>
                </div>
            </div>
        );
    }
}

export default OrdenBanner;