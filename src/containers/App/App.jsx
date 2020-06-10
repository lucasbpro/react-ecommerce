import React from 'react';
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../../routes';
import Topbar from '../Topbar';
import ShoppingCart from '../ShoppingCart';
import SearchWindow from '../SearchWindow';

import './App.scss';

const App = () => {

  const isCartOpen = useSelector(store => store.isCartOpen);
  const isSearchOpen = useSelector(store => store.isSearchOpen);

  return(
      <div data-testid="app" className="app">
        <Router>
          <Topbar/>
          {isCartOpen && <ShoppingCart/>}
          {isSearchOpen && <SearchWindow/>}
          <Routes/>
        </Router>
      </div>
  )
};

export default App;
