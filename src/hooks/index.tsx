import React from 'react';

import { EnvironmentProvider } from 'domains/Environment/hooks';
import { AuthProvider } from 'domains/Auth/hooks';
import { FavoriteProvider } from 'domains/Favorites/hooks';

const AppProvider: React.FC = ({ children }) => (
  <EnvironmentProvider>
    <AuthProvider>
      <FavoriteProvider>{children}</FavoriteProvider>
    </AuthProvider>
  </EnvironmentProvider>
);

export default AppProvider;
