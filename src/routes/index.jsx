import React from 'react';
import { BrowserRouter as Router,
         Route, 
         Switch } from 'react-router-dom';

import Home from './Home';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';

const Routes = () => (
  <Router> 
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:product_id" component={ProductDetails} />
      <Route path="/" component={NotFound}/>
    </Switch>
  </Router> 
);

export default Routes;
