import './App.css';

import {Route, BrowserRouter as Router} from 'react-router-dom'

import Navbar from './components/home/navbar';

import ListadoCategoria from './components/categoria/listadocategoria'
import ListadoLibro from './components/libro/listadolibro.jsx';
import ListadoPersona from './components/persona/listadopersona'
import store from './reducers/store';
import { getty, puttyl } from './reducers/store';
import React, { useEffect, useState } from 'react';

function App() {
  console.log(store.getState());
  console.log("hello");
  useEffect(() => {
    store.dispatch(getty())
    console.log("hello")
  }, [store]);
  //store.dispatch(puttyl("genial", {nombre:"sads", categoria_id:"SEBA",descripcion:"sdasdas",},8));
    console.log(store.getState());

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

