import React from 'react';
import Style from './footer.module.css'

const Footer = (props) => {
    return (
        <div className={Style.div}>
            <div className={Style.logo}>
                <a href="/"><img alt={'logo PHL'} width='100%' src={'/assets/LogoBlanco.svg'}/></a>
            </div>
            <div className={Style.txt}>
                <p><b>Pharmalab Phl Laboratorios S.A.S</b><br/>Nit.900918210-6<br/>Calle 85a #28b-34, Barrio
                    Polo Club<br></br>Bogotá, Colombia.</p>
            </div>
            <div className={Style.txt}>
                <p><b><a href="https://www.sic.gov.co/" target={'blank'}>Superintendencia de Industria y Comercio</a></b><br/>Tel. (031) 587 0000<br/>
                    contactenos@sic.gov.co<br/>sic.gov.co
                </p>
            </div>
            <div className={Style.txt}>
                <p>© 2019 Pharmalab PHL Laboratorios. Todos los derechos reservados. Prohibida su reproduccion total o
                    parcial sin autorizacion de su titular. Las marcas utilizadas en el presente documento son marcas
                    registradas en favor de Pharmalab PHL Laboratorios.</p>
            </div>
            <div className={Style.logo}>
                <a className={`hvr-grow ${Style.icon}`} href="https://wa.me/573007771682" target={'blank'}><img alt={'icon'}
                                                                     src={'/assets/WhatsAppLogoMini.svg'}/></a>
                <a className={`hvr-grow ${Style.icon}`} href="https://www.instagram.com/pharmalabphl/" target={'blank'}><img alt={'icon'} src={'/assets/InstagramBlanco.svg'}/></a>
                <a className={`hvr-grow ${Style.icon}`} href="https://www.facebook.com/PharmalabPHL" target={'blank'}><img alt={'icon'}
                                                                     src={'/assets/FacebookBlanco.svg'}/></a>
            </div>
            <div className={Style.row}>
                    <p className={Style.col}><a href="/avisodeprivacidad">Aviso de privacidad</a></p>
                    <p className={Style.col}><a href="/politicadeprivacidad">Política de privacidad</a></p>
                    <p className={Style.col}><a href="/terminosycondiciones">Términos y condiciones</a></p>
                    <p className={Style.col}><a href="/terminosbibliomedic">Términos de uso Bibliomedic</a></p>
                    <p className={Style.col}><a href="/contacto">Contáctanos </a></p>
            </div>
        </div>
    );
};

export default Footer;