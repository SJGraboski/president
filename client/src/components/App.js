import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Home from '../containers/Home';
import Game from '../containers/Game';


const App = () => (
  <main>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/game" component={Game} />
    </Switch>
    <Footer />
  </main>
)

export default App;