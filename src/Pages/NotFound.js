import React, { Component } from 'react';
import Img1 from '../assets/pexels-jonathan-borba-3279197.jpg'
import styles from '../NotFound.module.css'

class NotFound extends Component {
    render() {
        return (
            <div className={styles.main}>
                
                    <img src={Img1}  width="500px" />
                    <p className={styles.texto}>Error 404 - Lo sentimos :(
                    Al parecer esta página no existe</p>
            </div>
        );
    }
}

export default NotFound;