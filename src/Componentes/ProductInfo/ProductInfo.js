import React, { PureComponent } from 'react'
import classes from './ProductInfo.css'
import axios from 'axios'
class ProductInfo extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            producto: {

            }
        }
    }

    componentDidMount() {
        //const { id } = this.props.match.params;
        const id = this.props.id;
        console.log(this.props);
        axios.get(`https://api.npoint.io/091cb40bb6d0f229f0d2/productos/${id}`, {})
            .then((res) => {
                const data = res.data;
                console.log(data);
                this.setState({ producto: data });
            })
            .catch((error) => {
                console.log(error);
            });

    }
    render() {
        return (
            <div className={classes.gridContainer}>
                <div className={classes.gridItem}>

                    <img src={this.state.producto.imagen}></img>

                </div>

                <div className={classes.gridItem}>
                    <div className={classes.sombra}>
                        <div className={classes.titulo}>
                            {this.state.producto.nombre}
                        </div>

                        <br></br>

                        <div className={classes.subtitulo}>
                            {this.state.producto.presentacion}
                        </div>

                        <br></br>

                        <div className={classes.categoria}>
                            {this.state.producto.categoria}
                        </div>
                    </div>


                    <br></br>

                    <div className={classes.gridrow}>

                        <div className={classes.gridItem3}>
                            <i class="fas fa-flask"></i>
                        </div>

                        <div className={classes.gridItem2}>
                            <p>Formula</p>
                            {this.state.producto.formula}
                        </div>

                        <div className={classes.gridItem3}>
                            <i class="fas fa-book-medical"></i>
                        </div>

                        <div className={classes.gridItem2}>
                            <p>Indicaciones</p>
                            {this.state.producto.indicaciones}
                        </div>

                        <div className={classes.gridItem3}>
                            <i class="fas fa-pills"></i>
                        </div>

                        <div className={classes.gridItem2}>
                            <p>Vía de administración</p>
                            {this.state.producto.via}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ProductInfo
