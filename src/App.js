import React from 'react';
import { BrowserRouter, link, Route,Redirect,Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Nosotros from './Pages/Nosotros'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
import Footer from './Componentes/footer/footer'
import Navbar from './Componentes/Navbar/Navbar'
import Perfil from './Componentes/Info/Info'

// Import Swiper styles




function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
     <Switch>
      <Route path="/" exact><Home /></Route>
      <Route path="/nosotros" exact><Nosotros /></Route>
      <Route path="/login" exact><Login /></Route>
      <Route path="/info" exact><Perfil /></Route>
      <Route component={NotFound}/>
     </Switch>
     <Footer/>
    </BrowserRouter>
 

  );
}

export default App;
