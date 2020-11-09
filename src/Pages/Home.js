import React, { Component } from 'react';
import Titulo from '../Componentes/Titulo/Titulo';
import Homebanner from '../Componentes/Home Banner/HomeBanner'
import BannerText from '../Componentes/BannerText/BannerText'
import Contact from "../Componentes/contact/contact";
import 'swiper/swiper.scss';
import CarouselProductos from '../Componentes/CarouselProductos/carouselProductos';
import Footer from '../Componentes/footer/footer';
import { Firebase } from "../config/firebase";
import PasosPedido from '../Componentes/Pasos/pasospedido'


class Home extends Component {
    constructor() {
        super();
        this.state = {
            productos: [],
        };
    }
    componentDidMount() {
        const database = Firebase.database();
        var ref = database.ref(`Products/`);
        ref.once(
          "value",
          (snapshot) => {
            
            const productos = Object.values(snapshot.val()).map(function (obj,i) {
                let newObj = {
                  id:Object.keys(snapshot.val())[i],
                  ...obj
                }
              return newObj;
            });
            this.setState({ productos });
          },
          function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          }
        );
    }
    render() {
        return (
            <div>
                <Homebanner />
                <BannerText title="Productos">A continuación verás una lista de productos que están disponibles bajo el mecanismo de venta libre según las regulaciones legales del país</BannerText>
                <CarouselProductos products={this.state.productos} />
                <BannerText title="¿Cómo funciona Zeri Care?">Somos una plataforma que buscar revolucionar el sistema de entrega de medicamentos y mejorar la trazabilidad de la historia clínica de nuestros usuarios</BannerText>
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