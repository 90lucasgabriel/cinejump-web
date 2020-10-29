import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Route from 'routes/enums';
import Login from 'pages/Login';

const mockedHistoryPush = jest.fn();
const mockedLogin = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('domains/Auth/hooks', () => {
  return {
    useAuth: () => ({
      login: mockedLogin,
    }),
  };
});

describe('Login Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should be able to login.', async () => {
    // Arrange
    const { getByPlaceholderText, getByText } = render(<Login />);

    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('ENTRAR');

    // Act
    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });
    fireEvent.click(buttonElement);

    // Assert
    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith(Route.BASE);
    });
  });

  it('should not be able to login with invalid credentials.', async () => {
    // Arrange
    const { getByPlaceholderText, getByText } = render(<Login />);

    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('ENTRAR');

    // Act
    fireEvent.change(emailField, { target: { value: 'not-valid-email' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });
    fireEvent.click(buttonElement);

    // Assert
    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    });
  });

  it('should display an error if login fails.', async () => {
    // Arrange
    const { getByPlaceholderText, getByText, getByTestId } = render(<Login />);

    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('ENTRAR');
    const errorElement = getByTestId('errorMessage');

    mockedLogin.mockImplementation(() => {
      throw new Error();
    });

    // Act
    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });
    fireEvent.click(buttonElement);

    // Assert
    await waitFor(() => {
      expect(errorElement).toHaveTextContent(
        'Ocorreu um erro ao fazer login. Verifique as credenciais.',
      );
    });
  });

  it('should redirect to signup.', async () => {
    // Arrange
    const { getByText } = render(<Login />);

    const buttonElement = getByText('CRIAR CONTA');

    // Act
    fireEvent.click(buttonElement);

    // Assert
    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith(Route.SIGNUP);
    });
  });
});
