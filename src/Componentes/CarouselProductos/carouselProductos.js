import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./carouselProductos.module.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, A11y]);

function CarouselProductos(props) {
  return (
    <div className={classes.main}>
      <Swiper
        navigation={true}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        loop="true"
      >
        {props.products.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <ProductCard
                key={i}
                nombre={item.nombre}
                imagen={item.imagen}
                id={i}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default CarouselProductos;
