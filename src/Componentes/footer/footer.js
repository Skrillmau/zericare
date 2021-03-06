import React from "react";
import Style from "./footer.module.css";
import facebook from "../../assets/FacebookBlanco.svg";
import instagram from "../../assets/InstagramBlanco.svg";
import wa from "../../assets/WhatsAppLogoMini.svg";
import health from "../../assets/health.svg";
import {Link} from 'react-router-dom';
const Footer = (props) => {
  return (
    <div className={Style.div}>
      <div className={Style.logo}>
        <Link href="/">
          <img alt={"logo"} width="100%" src={health} />
        </Link>
      </div>
      <div className={Style.txt}>
        <p>
          <b>Zeri Care S.A.S</b>
          <br />
          Nit.XXXXXXX-X
          <br />
          DG 115A # 70C-75<br></br>Bogotá, Colombia.
        </p>
      </div>
      <div className={Style.txt}>
        <p>
          <b>
            <a
              href="http://www.supersalud.gov.co/es-co/Paginas/Home.aspx/"
              target={"blank"}
            >
              Superintendencia de salud
            </a>
          </b>
          <br />
          Tel. (57) (1) 744 2000
          <br />
          contactenos@sic.gov.co
          <br />
          sic.gov.co
        </p>
      </div>
      <div className={Style.txt}>
        <p>© 2020 Zeri Dev .</p>
      </div>
      <div className={Style.logo}>
        <a className={`hvr-grow ${Style.icon}`} href="#" target={"blank"}>
          <img alt={"icon"} src={wa} />
        </a>
        <a className={`hvr-grow ${Style.icon}`} href="#" target={"blank"}>
          <img alt={"icon"} src={instagram} />
        </a>
        <a className={`hvr-grow ${Style.icon}`} href="#" target={"blank"}>
          <img alt={"icon"} src={facebook} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
