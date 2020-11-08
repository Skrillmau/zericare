import React, { Component } from 'react';
import ProductGrid from '../Componentes/ProductGrid/ProductGrid'
import 'swiper/swiper.scss';
import axios from 'axios';



class Tienda extends Component {
    constructor() {
        super();
        this.state = {
            productos: [],
        };
    }
    componentDidMount() {

        axios
            .get(`https://api.npoint.io/091cb40bb6d0f229f0d2`, {})
            .then((res) => {
                const data = res.data;
                console.log(data);
                this.setState({ productos: data.productos });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                
                <ProductGrid products={this.state.productos}/>
                

            </div>
        );
    }
}

export default Tienda;