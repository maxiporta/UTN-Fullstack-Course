import './App.css';

import {Route, BrowserRouter as Router} from 'react-router-dom'

import Navbar from './components/home/navbar';

import ListadoCategoria from './components/categoria/listadocategoria'
import ListadoLibro from './components/libro/listadolibro.jsx';
import ListadoPersona from './components/persona/listadopersona'
import store from './reducers/store';
import { getty, puttyl } from './reducers/store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  
  const datared = useSelector((state) => state);
  useEffect(() => {
    store.dispatch(getty())
  }, [datared]);
  //store.dispatch(puttyl("genial", {nombre:"sads", categoria_id:"SEBA",descripcion:"sdasdas",},8));

  return (
    <Router>
      <Navbar/>
        <Route exact path="/libro/listadolibro" component={ListadoLibro} />
        <Route exact path="/persona/listadopersona" component={ListadoPersona} />
        <Route exact path="/categoria/listadocategoria" component={ListadoCategoria} />
    </Router>
  );

}

export default App;

