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
        <Perfil tit="J balvin" Correo="jbalvin@gmail.com" user="jbalvinmen" imagen="https://okdiario.com/img/2020/05/05/j-balvin.jpg"/>
        <Perfil tit="Maluma" Correo="maluma@gmail.com" user="4babys" imagen="https://media.metrolatam.com/2020/08/23/malumabayern-4543465f91e2a442b35894f8b2f918cf-1200x800.jpg"/>
        <Perfil tit="Neymar" Correo="neymar@gmail.com" user="sinchampions"imagen="https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2020/08/23/neymar-1.jpeg"/>
      </header>
    </div>
  );
}

export default App;
