import React from 'react';
import { Switch } from 'react-router-dom';

import Route from 'routes/Route';

import Home from 'screens/Home';
import Movie from 'screens/Movie';
import Login from 'screens/Login';

import Profile from 'screens/Profile';
import Favorites from 'screens/Favorites';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movie" component={Movie} />

    <Route path="/login" component={Login} notLoggedIn />

    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/favorites" component={Favorites} isPrivate />
  </Switch>
);

export default Routes;
