import React, { Component } from 'react';
import BannerText from '../Componentes/BannerText/BannerText'
import Iframe from 'react-iframe'
import Texto from '../Componentes/Text/txt'
import img1 from '../assets/pexels-gustavo-fring-4173251.jpg'
import img2 from '../assets/pexels-anna-shvets-4226119.jpg'
import Paragraph from '../Componentes/Paragraph/Paragraph'
import TitContent from '../Componentes/titContent/titContent'

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
                <div style={divStyle}>
                    <TitContent contentType={"txt"} title={"Misión"}>
                        soportados por un equipo humano competente y una tecnología de avanzada; todo respaldado por una excelente gestión administrativa y financiera para responder a las necesidades de nuestros usuarios y sus familias..
                    </TitContent>
                    <TitContent contentType={"txt"} title={"Visión"}>
                        Para el 2030 seremos una compañía colombiana reconocida en Latinoamérica por su excelente
                        servicio al cliente, valor agregado en gestión de procesos internos y por la eficiencia, calidad
                        e idoneidad de los productos farmacéuticos comercializados. Nos proyectamos como una empresa con
                        presencia en distintos países de Latinoamérica capaz de atender y suplir con estrategias claras
                        los requerimientos terapéuticos en distintas áreas de la medicina. Pharmalab Phl Laboratorios se
                        consolidará en el mercado latinoamericano como una compañía enfocada en resolver de manera
                        integral las necesidades en enfermedades de alto impacto de los usuarios de la salud mediante el
                        uso de soluciones innovadoras que garanticen la sostenibilidad financiera del sistema y de los
                        aseguradores privados.
                            <br />
                        <br />
                        Pharmalab Phl Laboratorios se consolidará en el mercado latinoamericano como una compañía
                        enfocada en resolver de manera integral las necesidades en enfermedades de alto impacto de los usuarios de
                        la salud mediante el uso de soluciones innovadoras que garanticen la sostenibilidad nanciera del sistema
                        y de los aseguradores privados.
                    </TitContent>
                </div>
                <BannerText title="¿Dónde Encontrarnos?">Podrás encontrar nuestros puntos en las clínicas aliadas</BannerText>

                <div style={divStyle}>
                    <div>
                        <img src={img2} width="90%" />
                    </div>
                    <div>
                        <Texto >Debido a la creciente demanda de consultas médicas alredor del país, contamos con tres puntos de atención distribuidos a lo largo de la ciudad (Bogotá D.C). Nuestro punto principal se encuentra el la clínica Shaio. En los los puntos de atención, podrás realizar el registro de tu usuario Care, para el registro debes contar con tu documento de indentificación y en caso de ser menos de edad, deberás estar acompañado de tu tutor legal</Texto>
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15905.646960313354!2d-74.073232!3d4.698311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3fc4d0bb07cbde3f!2sCl%C3%ADnica%20Shaio!5e0!3m2!1ses-419!2sco!4v1601319230410!5m2!1ses-419!2sco" 
                            position="absolute"
                            width="30%"
                            id="myId"
                            className="myClassname"
                            height="60%"
                         />
                    </div>
                </div>

            </div>
        );
    }
}

export default Nosotros;