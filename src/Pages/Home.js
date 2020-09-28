import React, { Component } from 'react';
import Titulo from '../Componentes/Titulo/Titulo';
import Homebanner from '../Componentes/Home Banner/HomeBanner'
import Caracteristicas from '../Componentes/Caracteristicas/caracteristicas'
import BannerText from '../Componentes/BannerText/BannerText'
import Contact from "../Componentes/contact/contact";
import 'swiper/swiper.scss';
import CarouselProductos from '../Componentes/CarouselProductos/carouselProductos';
import Footer from '../Componentes/footer/footer'

class Home extends Component {
    render() {
        return (
            <div>

                <Titulo Titulo="Zericare" />
                <Homebanner />
                <BannerText title="PRUEBA">Consideramos que el conocimiento es el pilar fundamental del cuidado de la salud. Por ello, Pharmalab PHL
				Laboratorios abre un espacio en el que se compartirá información de salud del interés de la población.</BannerText>
                <CarouselProductos />
                <Caracteristicas
                    titulo1="Moldes autoportantes"
                    texto1="Nuestros moldes son autoportantes, te invitamos a olvidarte de las latas."
                    titulo2="No pierden el color"
                    texto2="Cuando los metes al horno, nuestros moldes mantienen el color durante y  después del horneo."
                    titulo3="No requieren engrasar"
                    texto3="Nuestros moldes no necesitan mantequilla o harina para que la masa no se pegue."
                    titulo4="Hornea en serie"
                    texto4="Puedes hornear cuantos necesites, pues no requieres esperar a desmoldar para poder hornear la siguiente ronda de ponques."
                    titulo5="Ahorro en costos"
                    texto5="Nuestros moldes te ayudan a bajar la mano de obra, pues no necesitas lavar las latas y se demoran mucho menos tiempo de horneo que en hornear en moldes de metal."
                    titulo6="Incluimos la imagen de tu marca"
                    texto6="Podemos hacer los diseños que requieras, bajo pedido, ayudándote  a exponer tu marca para que tus clientes te reconozcan."
                />
                <Contact type={"min"} />
                <Footer />
            </div>
        );
    }
}

export default Home;