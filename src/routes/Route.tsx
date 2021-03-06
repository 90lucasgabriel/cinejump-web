import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from 'domains/Auth/hooks';
import RouteEnum from 'routes/enums';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  notLoggedIn?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  notLoggedIn = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate && !user) {
          return (
            <Redirect
              to={{
                pathname: RouteEnum.LOGIN,
                state: { from: location },
              }}
            />
          );
        }

        if (notLoggedIn && !!user) {
          return (
            <Redirect
              to={{
                pathname: RouteEnum.PROFILE,
                state: { from: location },
              }}
            />
          );
        }

        return <Component />;
      }}
    />
  );
};

export default Route;
