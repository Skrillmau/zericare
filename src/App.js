import React from 'react';
import './App.css';
import Titulo from './Componentes/Titulo/Titulo';


// Import Swiper styles
import 'swiper/swiper.scss';
import CarouselProductos from './Componentes/CarouselProductos/carouselProductos';



function App() {
  return (
    <div className="App">
      
        <Titulo Titulo="Zericare"/>
        <CarouselProductos/>
      
    </div>
  );
}

export default App;
