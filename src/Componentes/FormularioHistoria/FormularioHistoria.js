import React from "react";
import * as actionCreators from "../../Store/Actions/";
import Style from "./FormularioHistoria.css";
import Button from "../Button/txt/txtButton";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { StylesProvider } from "@material-ui/core";
import { mdiWindowClose } from "@mdi/js";
import { connect } from "react-redux";

const FormularioHistoria = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(props.user);
    var date = new Date();
    var timestamp = date.getTime();
    let historia = {
      patologicos: e.target.patalogicos.value,
      afamiliares: e.target.afamiliares.value,
      peea: e.target.peea.value,
      efisica: e.target.efisica.value,
      anopatologicos: e.target.anopatalogicos.value,
      aginecoobstetricos: e.target.aginecoobstetricos.value,
      dnr: e.target.dnr.value,
      fecha: timestamp,
    };
    props.addHistoria(historia, props.id);
    Swal.fire({
      title: "Historia creado correctamente",
      text: "La historia se ha registrado correctamente",
      icon: "success",
      confirmButtonColor: "#06b5ef",
    }).then((result) => {
      props.onRedirect(`/paciente/${props.id}`);
    });
  };
  return (
    <div className={Style.item2}>
      <h3 className={Style.subtitulo}>Agregar Historia Clinica</h3>
      <form className={Style.form} onSubmit={handleSubmit} id="contactForm">
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
          name="afamiliares"
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
          name="anopatalogicos"
          rows="3"
          placeholder="Antecedentes no Patológicos "
          required
        />
        <textarea
          className={Style.input}
          name="aginecoobstetricos"
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
        <Button color={"blue"} type="submit">
          Agregar
        </Button>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addHistoria: (recipe, id) =>
      dispatch(actionCreators.addHistoria(recipe, id)),
    onClearError: () => dispatch(actionCreators.clearError()),
    fetchUser: (id) => dispatch(actionCreators.fetchUser(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.userStore.user,
    isUserLoggedIn: state.authStore.isUserLoggedIn,
    uid: state.authStore.user.uid,
    error: state.errorStore.error,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormularioHistoria);
