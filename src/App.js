import React from 'react';
import { BrowserRouter, link, Route,Redirect,Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Nosotros from './Pages/Nosotros'
import NotFound from './Pages/NotFound';


// Import Swiper styles




function App() {
  return (
    <BrowserRouter>
     <Switch>
      <Route path="/" exact><Home /></Route>
      <Route path="/nosotros" exact><Nosotros /></Route>
      <Route component={NotFound}/>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
