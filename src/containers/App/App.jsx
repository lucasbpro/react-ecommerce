import React from 'react';
import { Provider } from "react-redux";

import Routes from '../../routes';
import Topbar from '../../components/Topbar';
import store from "../../store";

import './App.scss';

const App = () => (
  <Provider store={store}>
    <div data-testid="app" className="app">
        <Topbar/>
        <Routes/>
    </div>
  </Provider>
);

export default App;
