import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductGrid.css";




import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";



function ProductGrid(props) {
    return (
        <div className={classes.main}>
        <div className={classes.gridContainer}>
        {props.products.map((item, i) => {
          return (
            
              <ProductCard
                key={i}
                nombre={item.nombre}
                imagen={item.imagen}
                id={item.id}
              />
            
          );
        })}
      </div>
    </div>
    )
}

export default ProductGrid
