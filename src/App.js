import './App.css';

import {Route, BrowserRouter as Router} from 'react-router-dom'

import Navbar from './components/home/navbar';

import ListadoCategoria from './components/categoria/listadocategoria'
import ListadoLibro from './components/libro/listadolibro.jsx';
import ListadoPersona from './components/persona/listadopersona'
import IngresarPersona from './components/persona/ingresarpersona';

function App() {
  return (
    <Router>
      <Navbar/>
        <Route exact path="/libro/listadolibro" component={ListadoLibro} />
        <Route exact path="/persona/listadopersona" component={ListadoPersona} />
        <Route exact path="/categoria/listadocategoria" component={ListadoCategoria} />

        <Route exact path="/persona/ingresarpersona" component={IngresarPersona} />
    </Router>
  );

}

export default App;

