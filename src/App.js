import React from 'react';
import { BrowserRouter, link, Route,Redirect,Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Nosotros from './Pages/Nosotros'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
import Footer from './Componentes/footer/footer'
import Navbar from './Componentes/Navbar/Navbar'
import ProductoDetail from './Pages/ProductoDetail'
// Import Swiper styles




function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Switch>
      
      <Route path="/nosotros"  component={Nosotros}/>
      <Route path="/login"  component={Login}/>
      <Route path="/producto/:id" component={ProductoDetail}/>
      <Route path="/" component={Home}/>
      <Route component={NotFound}/>
     </Switch>
     <Footer/>
    </BrowserRouter>
 

  );
}

export default App;
