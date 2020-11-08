import React from 'react';

import { ModalProvider } from 'components/Modal/hooks';
import { EnvironmentProvider } from 'domains/Environment/hooks';
import { AuthProvider } from 'domains/Auth/hooks';
import { FavoriteProvider } from 'domains/Favorites/hooks';

const AppProvider: React.FC = ({ children }) => (
  <ModalProvider>
    <EnvironmentProvider>
      <AuthProvider>
        <FavoriteProvider>{children}</FavoriteProvider>
      </AuthProvider>
    </EnvironmentProvider>
  </ModalProvider>
);

export default AppProvider;
