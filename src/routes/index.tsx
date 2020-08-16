import React from 'react';
import { Switch } from 'react-router-dom';

import Route from 'routes/Route';
import RouteEnum from 'routes/enums/Route';

import { Home, Movie, Login, Profile, Favorites } from 'screens';

const Routes: React.FC = () => (
  <Switch>
    <Route path={RouteEnum.BASE} exact component={Home} />
    <Route path={RouteEnum.MOVIE} component={Movie} />

    <Route path={RouteEnum.LOGIN} component={Login} notLoggedIn />

    <Route path={RouteEnum.PROFILE} component={Profile} isPrivate />
    <Route path={RouteEnum.FAVORITES} component={Favorites} isPrivate />
  </Switch>
);

export default Routes;
