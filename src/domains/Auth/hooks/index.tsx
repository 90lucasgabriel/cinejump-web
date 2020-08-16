import React, { createContext, useCallback, useContext, useState } from 'react';
import api from 'services/api';

import { postRawAuth } from 'domains/Auth/api/PostAuth';
import ContextData from '../dtos/ContextData';
import AuthState from '../dtos/AuthState';

const AuthContext = createContext<ContextData>({} as ContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Cinejump:token');
    const user = localStorage.getItem('@Cinejump:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const login = useCallback(async ({ email, password }): Promise<void> => {
    const response = await postRawAuth({ email, password });
    const { token, user } = response;

    localStorage.setItem('@Cinejump:token', token);
    localStorage.setItem('@Cinejump:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@Cinejump:token');
    localStorage.removeItem('@Cinejump:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): ContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };
