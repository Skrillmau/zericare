import React, { PureComponent } from 'react'
import Tarjeta from './Tarjeta';
import { Swiper, SwiperSlide } from 'swiper/react';

class CarouselProductos extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div style={{width:"80%"}}>
            <Swiper
      spaceBetween={0}
      slidesPerView={3}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Tarjeta tarjeta="Paracetamol" descripcion="Descripcion"></Tarjeta></SwiperSlide>
      <SwiperSlide><Tarjeta tarjeta="Paracetamol" descripcion="Descripcion"></Tarjeta></SwiperSlide>
      <SwiperSlide><Tarjeta tarjeta="Paracetamol" descripcion="Descripcion"></Tarjeta></SwiperSlide>
      <SwiperSlide><Tarjeta tarjeta="Paracetamol" descripcion="Descripcion"></Tarjeta></SwiperSlide>
  
    </Swiper>
    </div>
        )
    }
}

export default CarouselProductos