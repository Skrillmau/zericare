import React, { Component } from 'react';
import Titulo from '../Componentes/Titulo/Titulo';
import Homebanner from '../Componentes/Home Banner/HomeBanner'
import BannerText from '../Componentes/BannerText/BannerText'
import Contact from "../Componentes/contact/contact";
import 'swiper/swiper.scss';
import CarouselProductos from '../Componentes/CarouselProductos/carouselProductos';
import Footer from '../Componentes/footer/footer';
import axios from 'axios';
import PasosPedido from '../Componentes/Pasos/pasospedido'


class Home extends Component {
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
                <Homebanner />
                <BannerText title="Productos">Consideramos que el conocimiento es el pilar fundamental del cuidado de la salud. Por ello, Pharmalab PHL
				Laboratorios abre un espacio en el que se compartirá información de salud del interés de la población.</BannerText>
                <CarouselProductos products={this.state.productos} />
                <BannerText title="¿Cómo funciona Zeri Care?">Consideramos que el conocimiento es el pilar fundamental del cuidado de la salud. Por ello, Pharmalab PHL
				Laboratorios abre un espacio en el que se compartirá información de salud del interés de la población.</BannerText>
                <PasosPedido 
                    paso1="Regístrate"
                    paso2="Asiste a tu consulta"
                    paso3="Dale a tu médico tu código Care"
                    paso4="Confirma tu pedido en la plataforma" />
                <Contact type={"min"} />

            </div>
        );
    }
}

export default Home;