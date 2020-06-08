import React from 'react';
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../../routes';
import Topbar from '../Topbar';
import ShoppingCart from '../ShoppingCart';

import './App.scss';

const App = () => {

  const visibilityCart = useSelector(store => store.visibilityCart);

  return(
      <div data-testid="app" className="app">
        <Router>
          <Topbar/>
          {visibilityCart && <ShoppingCart/>}
          <Routes/>
        </Router>
      </div>
  )
};

export default App;
