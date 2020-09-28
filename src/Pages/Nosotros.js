import React, { Component } from 'react';
import BannerText from '../Componentes/BannerText/BannerText'
import Iframe from 'react-iframe'

class Nosotros extends Component {
    render() {
        return (
            <div>
                <BannerText title="MISION">Consideramos que el conocimiento es el pilar fundamental del cuidado de la salud. Por ello, Pharmalab PHL
				Laboratorios abre un espacio en el que se compartirá información de salud del interés de la población.</BannerText>
                <BannerText title="VISION">Consideramos que el conocimiento es el pilar fundamental del cuidado de la salud. Por ello, Pharmalab PHL
				Laboratorios abre un espacio en el que se compartirá información de salud del interés de la población.</BannerText>
                <h1>¿Dónde encontrarnos?</h1>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4117096030973!2d-74.07542068474939!3d4.698316342985262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ad7143e27c5%3A0x3fc4d0bb07cbde3f!2sCl%C3%ADnica%20Shaio!5e0!3m2!1ses-419!2sco!4v1601255663857!5m2!1ses-419!2sco"
                    width="450px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" /> 

            </div>
        );
    }
}

export default Nosotros;