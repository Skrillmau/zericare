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
        axios.get(`https://api.npoint.io/091cb40bb6d0f229f0d2/${id}`, {})
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
                <div className={classes.gridItem}>1</div>
                <div className={classes.gridItem}>2</div>
            </div>
        )
    }
}

export default ProductInfo
