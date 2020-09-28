import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Color } from 'shared/enums';
import Footer from 'containers/Footer';

describe('Footer Component', () => {
  it('should be able to render a footer.', () => {
    // Arrange
    const { getByTestId } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    // Act
    const containerElement = getByTestId('footer-container');

    // Assert
    expect(containerElement).toBeTruthy();
  });

  it('should be able to render a themed footer.', async () => {
    // Arrange
    const { getByTestId } = render(
      <MemoryRouter>
        <Footer theme="secondary" />
      </MemoryRouter>,
    );

    // Act
    const containerElement = getByTestId('footer-container');

    // Assert
    expect(containerElement).toHaveStyle(`background: ${Color.Secondary}`);
  });

  it('background should override theme.', async () => {
    // Arrange
    const { getByTestId } = render(
      <MemoryRouter>
        <Footer theme="secondary" background={Color.Error} />
      </MemoryRouter>,
    );

    // Act
    const containerElement = getByTestId('footer-container');

    // Assert
    expect(containerElement).toHaveStyle(`background: ${Color.Error}`);
  });

  it('should contains a logo.', async () => {
    // Arrange
    const { getByTestId } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    // Act
    const containerElement = getByTestId('footer-container');
    const logoElement = getByTestId('footer-logo');

    // Assert
    expect(containerElement).toContainElement(logoElement);
  });
});
