import React from 'react';
import logo from './logo.svg';
import './App.css';
import Titulo from './Componente/Titulo';


// Import Swiper styles
import 'swiper/swiper.scss';
import CarouselProductos from './Componente/carouselProductos';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo Titulo="Zericare"></Titulo>
        
        <CarouselProductos></CarouselProductos>
      </header>
    </div>
  );
}

export default App;
