import React from 'react';

const FormularioHistoria = () => {
    return (
        <div>
            <h3>Agregar Paciente</h3>
            <form className="" onSubmit={props.onsubmit} id="contactForm">
                <textarea
                    className=""
                    name="patalogicos"
                    type="text"
                    placeholder="Antecedentes Patológicos: "
                    required
                />
                <br />
                <textarea
                    className=""
                    name="afamiliares:"
                    type="text"
                    placeholder="Antecedentes familiares:"
                    required
                />
                <br />
                <textarea
                    className=""
                    name="peea"
                    type="text"
                    placeholder="PEEA última consulta:          "
                />
                <br />
                <textarea
                    className=""
                    name="efisica"
                    rows="10"
                    placeholder="Exploración Física: "
                    required
                />
                <textarea
                    className=""
                    name="efisica"
                    rows="10"
                    placeholder="Antecedentes no Patológicos "
                    required
                />
                <textarea
                    className=""
                    name="efisica"
                    rows="10"
                    placeholder="Antecedentes Gineco-Obstétricos "
                    required
                />
                <textarea
                    className=""
                    name="dnr"
                    rows="10"
                    placeholder="DNR"
                    required
                />
                <Button color={"blue"} type="submit" >Agregar</Button>
            </form>
        </div>
    );
};

export default FormularioHistoria;