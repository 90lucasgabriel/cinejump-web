import React, { createContext, useContext } from 'react';

import Environment from 'domains/Environment/types/Environment';
import { Environment as EnvironmentEnum } from 'domains/Environment/enums/Environment';
import ContextData from '../types/ContextData';

const EnvironmentContext = createContext<ContextData>({} as ContextData);

const EnvironmentProvider: React.FC = ({ children }) => {
  const environmentList = [
    {
      key: EnvironmentEnum.DEVELOPMENT,
      name: 'Desenvolvimento',
      apiUrl: process.env.REACT_APP_API_URL_DEVELOPMENT,
    },
    {
      key: EnvironmentEnum.PRODUCTION,
      name: 'Produção',
      apiUrl: process.env.REACT_APP_API_URL,
    },
  ] as Environment[];

  const isProduction = process.env.REACT_APP_IS_PRODUCTION === 'true';

  return (
    <EnvironmentContext.Provider
      value={{
        isProduction,
        environmentList,
      }}
    >
      {children}
    </EnvironmentContext.Provider>
  );
};

function useEnvironment(): ContextData {
  const context = useContext(EnvironmentContext);

  if (!context) {
    throw new Error(
      'useEnvironment must be used within an EnvironmentProvider.',
    );
  }

  return context;
}

export { EnvironmentProvider, useEnvironment };
