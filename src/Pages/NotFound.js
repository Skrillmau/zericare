import React, { Component } from 'react';
import Img1 from '../assets/pexels-jonathan-borba-3279197.jpg'

class NotFound extends Component {
    render() {
        return (
            <div>
                404 Lo sentimos :(
                    Al parecer esta página no existe
                    <img src={Img1} />
            </div>
        );
    }
}

export default NotFound;