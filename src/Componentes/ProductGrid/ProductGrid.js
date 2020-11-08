import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductGrid.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, A11y]);

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
                id={i}
              />
            
          );
        })}
      </div>
    </div>
    )
}

export default ProductGrid
