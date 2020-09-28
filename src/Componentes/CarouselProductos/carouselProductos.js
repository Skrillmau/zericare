import React, { PureComponent } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

class CarouselProductos extends PureComponent {
  render() {
    return (
      <div style={{ width: "80%" }}>
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
        >
          {this.props.products.map((item, i) => {
            console.log(item);
            return (
              <SwiperSlide key={i}>
                <ProductCard id={i} nombre={item.nombre} imagen={item.imagen} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }
}

export default CarouselProductos;
