import React from 'react';
import { Route, 
         Switch } from 'react-router-dom';

import Home from './Home';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';

const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:product_id" component={ProductDetails} />
      <Route path="/" component={NotFound}/>
    </Switch>
);

export default Routes;
