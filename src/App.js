import './App.css';

import {Route, BrowserRouter as Router} from 'react-router-dom'

import Navbar from './components/home/navbar';

import ListadoCategoria from './components/categoria/listadocategoria'
import ListadoLibro from './components/libro/listadolibro.jsx';
import ListadoPersona from './components/persona/listadopersona'

function App() {
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

