import React, { useState } from 'react';

import OrdenFinal from '../OrdenFinal/OrdenFinal';
import Orden from '../Orden/Orden'
import classes from "./TablaMedicamentos.css";

const TablaMedicamentos = () => {
    const [Items, setItems] = useState([]);
    const [Selecteditem, setSelecteditem] = useState(null);

    const addMedicamentos = async (e) => {
        e.preventDefault();
        console.log(Items);
        const item = {
            Nombre: e.target[0].value,
            Cantidad: e.target[1].value,
            Dosis: e.target[2].value,
            Observaciones: e.target[3].value
        };
        console.log(item);

        await setItems(Items.concat(item));
    }
    const deleteMedicamentos = (index) => {
        const test = [...Items]
        test.splice(index, 1)
        console.log(test, "test")
        setItems(test);
    }

    return (
        <div className={classes.App}>
            <div className={classes.gridContainer}>
                <div className={classes.item2}>
                    <Orden onsubmit={addMedicamentos} />
                </div>

                <div className={classes.item2}>
                    {Items.map((item, i) => {

                        return (

                            <OrdenFinal nombre={item.Nombre} cantidad={item.Cantidad} dosis={item.Dosis} observaciones={item.Observaciones} onclick={() => deleteMedicamentos(i)} />
                        )
                    })}
                </div>
            </div>



        </div>
    );

};

export default TablaMedicamentos;
