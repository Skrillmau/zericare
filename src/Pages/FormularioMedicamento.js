import TablaMedicamentos from '../Componentes/TablaMedicamentos/TablaMedicamentos';
import React, { PureComponent } from 'react'

class FormularioMedicamento extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <TablaMedicamentos/>
            </div>
        )
    }
}

export default FormularioMedicamento
