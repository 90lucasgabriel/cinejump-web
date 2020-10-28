import React from 'react';
import { Switch } from 'react-router-dom';

import Route from 'routes/Route';
import RouteEnum from 'routes/enums';

import { Home, Movie, Login, Signup, Profile, Favorites } from 'pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path={RouteEnum.BASE} exact component={Home} />
    <Route path={`${RouteEnum.MOVIE}/:id`} component={Movie} />

    <Route path={RouteEnum.LOGIN} component={Login} notLoggedIn />
    <Route path={RouteEnum.SIGNUP} component={Signup} notLoggedIn />

    <Route path={RouteEnum.PROFILE} component={Profile} isPrivate />
    <Route path={RouteEnum.FAVORITES} component={Favorites} isPrivate />
  </Switch>
);

export default Routes;
