import React from 'react';
import logo from './logo.svg';
import './App.css';
import Titulo from './Componente/Titulo';


// Import Swiper styles
import 'swiper/swiper.scss';
import CarouselProductos from './Componente/carouselProductos';
import Perfil from './Componente/Perfil';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo Titulo="Zericare"></Titulo>
        <CarouselProductos></CarouselProductos>
        <Perfil tit="J balvin" Correo="jbalvin@gmail.com" user="jbalvinmen"></Perfil>
      </header>
    </div>
  );
}

export default App;
