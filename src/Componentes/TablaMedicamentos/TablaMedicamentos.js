import React, { useState } from "react";

import OrdenFinal from "../OrdenFinal/OrdenFinal";
import Orden from "../Orden/Orden";
import classes from "./TablaMedicamentos.css";
import * as actionCreators from "../../Store/Actions/";
import { connect } from "react-redux";
import Swal from 'sweetalert2';
const TablaMedicamentos = (props) => {
  const [Items, setItems] = useState([]);
  const [Selecteditem, setSelecteditem] = useState(null);

  const addMedicamentos = async (e) => {
    e.preventDefault();
    console.log(Items);
    const item = {
      Nombre: e.target[0].value,
      Cantidad: e.target[1].value,
      Dosis: e.target[2].value,
      Observaciones: e.target[3].value,
    };
    console.log(item);

    await setItems([...Items, item]);
  };
  const deleteMedicamentos = (index) => {
    const test = [...Items];
    test.splice(index, 1);
    console.log(test, "test");
    setItems(test);
  };
  const onSend = () => {
    let date = new Date();
    console.log(Items);
    let recipe = {
      fecha: date.getTime(),
      ...Items,
    };
    props.addRecipe(recipe, props.id);
    Swal.fire({
      title: "Receta creado correctamente",
      text: "La receta se ha registrado correctamente",
      icon: "success",
      confirmButtonColor: "#06b5ef",
    }).then((result) => {
      props.onRedirect(`/paciente/${props.id}`);
    });
  };

  return (
    <div className={classes.App}>
      <div className={classes.gridContainer}>
        <div className={classes.item2}>
          <Orden onsubmit={addMedicamentos} onSend={onSend} />
        </div>

        <div className={classes.item2}>
          {Items.map((item, i) => {
            return (
              <OrdenFinal
                nombre={item.Nombre}
                cantidad={item.Cantidad}
                dosis={item.Dosis}
                observaciones={item.Observaciones}
                onclick={() => deleteMedicamentos(i)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.authStore.isUserLoggedIn,
    uid: state.authStore.user.uid,
    loadingAuth: state.authStore.loadingAuth,
    error: state.errorStore.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addRecipe: (recipe, userid) =>
      dispatch(actionCreators.addRecipe(recipe, userid)),
    onClearError: () => dispatch(actionCreators.clearError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TablaMedicamentos);
