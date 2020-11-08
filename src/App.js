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
import Tienda from './Pages/Tienda'
import PerfilM from './Pages/PerfilM'
import FormularioMedicamentos from './Pages/FormularioMedicamento'
import Perfil from './Pages/Perfil'
import FormularioPaciente from './Componentes/FormularioPaciente/FormularioPaciente';
// Import Swiper styles

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/login" component={Login} />
        <Route path="/Tienda" component={Tienda} />
        <Route path="/PerfilM" component={PerfilM} />
        <Route path="/producto/:id" component={ProductoDetail} />
        <Route path="/FormularioMedicamentos"  component={FormularioMedicamentos}/>
        <Route path="/info/:id"  component={Perfil}/>
        <Route path="/addPaciente" component={FormularioPaciente}/>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
