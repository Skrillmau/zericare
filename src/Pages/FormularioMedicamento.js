import React, { useState } from 'react';
import Orden from '../Componentes/Orden/Orden'
import OrdenFinal from '../Componentes/OrdenFinal/OrdenFinal';
import Buttom from '../Componentes/Button/txt/txtButton.js';


const FormularioMedicamento = (props) => {
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
        <div>
            <p>Agregar Medicamento</p>
            <Orden onsubmit={addMedicamentos} />
            <div>
            {Items.map((item, i) => {

                return (

                    <OrdenFinal nombre={item.Nombre} cantidad={item.Cantidad} dosis={item.Dosis} observaciones={item.Observaciones} deleteItem={() => props.deleteItem(i)} />
                )
            })}
            </div>
        
        </div>
    );
   
};

export default FormularioMedicamento;