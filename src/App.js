import React from 'react';
import SideBar from '../src/components/sidebar/SideBar'
import Pokemons from './pages/Pokemons/Pokemons'
import Home from './pages/Home'
import './app.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <SideBar />
      <div className="container-center" id="page-wrap">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pokemons" component={Pokemons} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
