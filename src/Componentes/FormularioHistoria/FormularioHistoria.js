import React from 'react';


import Style from "./FormularioHistoria.css";
import Button from "../Button/txt/txtButton";
import emailjs from "emailjs-com";
import swal from "sweetalert2";

const FormularioHistoria = () => {
    return (
        <div className={Style.item2}>
            <h3 className={Style.subtitulo}>Agregar Historia Clinica</h3>
            <form className={Style.form} onSubmit="" id="contactForm">
                <textarea
                    className={Style.input}
                    name="patalogicos"
                    rows="3"
                    placeholder="Antecedentes Patológicos: "
                    required
                />
                <br />
                <textarea
                    className={Style.input}
                    name="afamiliares:"
                    rows="3"
                    placeholder="Antecedentes familiares:"
                    required
                />
                <br />
                <textarea
                    className={Style.input}
                    name="peea"
                    rows="3"
                    placeholder="PEEA última consulta:          "
                />
                <br />
                <textarea
                    className={Style.input}
                    name="efisica"
                    rows="3"
                    placeholder="Exploración Física: "
                    required
                />
                <textarea
                    className={Style.input}
                    name="efisica"
                    rows="3"
                    placeholder="Antecedentes no Patológicos "
                    required
                />
                <textarea
                    className={Style.input}
                    name="efisica"
                    rows="3"
                    placeholder="Antecedentes Gineco-Obstétricos "
                    required
                />
                <textarea
                    className={Style.input}
                    name="dnr"
                    rows="3"
                    placeholder="DNR"
                    required
                />
                <br />
                <Button color={"blue"} type="submit" >Agregar</Button>
            </form>
        </div>
    );
};

export default FormularioHistoria;