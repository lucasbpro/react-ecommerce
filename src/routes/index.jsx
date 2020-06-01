import React from 'react';
import { BrowserRouter as Router,
         Route, 
         Switch } from 'react-router-dom';

import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";

const Routes = () => (
  <Router> 
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:product_id" component={ProductDetails} />
    </Switch>
  </Router> 
);

export default Routes;
