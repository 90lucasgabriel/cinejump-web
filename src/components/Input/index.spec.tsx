import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { Color } from 'shared/enums';
import Input from 'components/Input';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Input Component', () => {
  it('should be able to render an input.', () => {
    // Arrange
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    // Act and Assert
    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });

  it('should render highlight on input focus.', async () => {
    // Arrange
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    // Act
    fireEvent.focus(inputElement);

    // Assert
    await waitFor(() => {
      expect(containerElement).toHaveStyle(`border-color: ${Color.Text}`);
      expect(containerElement).toHaveStyle(`color: ${Color.Text}`);
    });
  });

  it('should remove highlight on input blur.', async () => {
    // Arrange
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    // Act
    fireEvent.focus(inputElement);
    fireEvent.blur(inputElement);

    // Assert
    await waitFor(() => {
      expect(containerElement).not.toHaveStyle(`border-color: ${Color.Text}`);
      expect(containerElement).toHaveStyle(`color: ${Color.Text}`);
    });
  });

  it('should keep border highlight when input filled.', async () => {
    // Arrange
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    // Act
    fireEvent.change(inputElement, {
      target: { value: 'johndoe@example.com' },
    });
    fireEvent.blur(inputElement);

    // Assert
    await waitFor(() => {
      expect(containerElement).toHaveStyle(`color: ${Color.Text}`);
    });
  });
});
