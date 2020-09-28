import React from 'react';
import Style from './footer.module.css'
import facebook from '../../assets/FacebookBlanco.svg'
import instagram from '../../assets/InstagramBlanco.svg'
import wa from '../../assets/WhatsAppLogoMini.svg'
import health from '../../assets/health.svg'

const Footer = (props) => {
    return (
        <div className={Style.div}>
            <div className={Style.logo}>
                <a href="/"><img alt={'logo PHL'} width='100%' src={health}/></a>
            </div>
            <div className={Style.txt}>
                <p><b>Zeri Care S.A.S</b><br/>Nit.91111111-6<br/>Calle 85a #28b-34, Barrio
                    Polo Club<br></br>Bogotá, Colombia.</p>
            </div>
            <div className={Style.txt}>
                <p><b><a href="http://www.supersalud.gov.co/es-co/Paginas/Home.aspx/" target={'blank'}>Superintendencia de salud</a></b><br/>Tel. (57) (1) 744 2000<br/>
                    contactenos@sic.gov.co<br/>sic.gov.co
                </p>
            </div>
            <div className={Style.txt}>
                <p>© 2020 Zeri Dev .</p>
            </div>
            <div className={Style.logo}>
                <a className={`hvr-grow ${Style.icon}`} href="https://wa.me/573007771682" target={'blank'}><img alt={'icon'}
                                                                     src={wa}/></a>
                <a className={`hvr-grow ${Style.icon}`} href="https://www.instagram.com/pharmalabphl/" target={'blank'}><img alt={'icon'} src={instagram}/></a>
                <a className={`hvr-grow ${Style.icon}`} href="https://www.facebook.com/PharmalabPHL" target={'blank'}><img alt={'icon'}
                                                                     src={facebook}/></a>
            </div>
        </div>
    );
};

export default Footer;