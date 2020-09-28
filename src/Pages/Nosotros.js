import React, { Component } from 'react';
import BannerText from '../Componentes/BannerText/BannerText'
import Iframe from 'react-iframe'
import Texto from '../Componentes/Text/txt'
import img1 from '../assets/pexels-pixabay-207601.jpg'
import img2 from '../assets/pexels-anna-shvets-3683098.jpg'
import Paragraph from '../Componentes/Paragraph/Paragraph'

class Nosotros extends Component {
    render() {
        const divStyle = {
            display: "grid",
            gridTemplateColumns: "40% 60%",
            padding: "3%",
        }

        const div2 = {
            width: "100%",
            margin: "auto",

        }
        return (
            <div>
                <div style={div2} >
                    <img src={img1} height="700px" width="100%" />
                </div>
                <BannerText title="NOSOTROS">Somos coherentes entre lo que pensamos, sentimos y hacemos, basados en principios de honestidad y transparencia.</BannerText>

                <h1>¿Dónde encontrarnos?</h1>
                <div style={divStyle}>
                    <div>
                        <img src={img2} width="90%"/>
                    </div>
                    <div>
                        <Texto >Pharmalab Phl Laboratorios es una compañía comprometida con el bienestar social de la población
                        atendida. Por eso, anualmente se apoya en especie a Brigadas de Salud llevadas a cabo en zonas cómo
                        Santa Catalina en Bolívar. También se apoya el deporte de esta zona entregando implementos deportivos a
                        los equipos de fútbol infantil comunitarios. Pharmalab Phl Laboratorios también es donador activo de
								entidades sin ánimo de lucro cómo el Instituto Para Niños Ciegos Juan Antonio Pardo.</Texto>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nosotros;