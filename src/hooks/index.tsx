import React from 'react';

import { EnvironmentProvider } from 'domains/Environment/hooks';
import { AuthProvider } from 'domains/Auth/hooks';

const AppProvider: React.FC = ({ children }) => (
  <EnvironmentProvider>
    <AuthProvider>{children}</AuthProvider>
  </EnvironmentProvider>
);

export default AppProvider;
