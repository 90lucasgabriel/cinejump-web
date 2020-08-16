import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'screens/Home';
import Movie from 'screens/Movie';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movie" component={Movie} />
  </Switch>
);

export default Routes;
