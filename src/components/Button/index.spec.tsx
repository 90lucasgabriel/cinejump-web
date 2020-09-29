import React from 'react';
import { render } from '@testing-library/react';

import { Color } from 'shared/enums';
import Button from 'components/Button';

describe('Button Component', () => {
  it('should render a button.', () => {
    // Arrange
    const { getByRole } = render(<Button />);

    // Act
    const containerElement = getByRole('button');

    // Assert
    expect(containerElement).toBeTruthy();
  });

  it('with no properties should render a primary button.', async () => {
    // Arrange
    const { getByRole } = render(<Button />);

    // Act
    const containerElement = getByRole('button');

    // Assert
    expect(containerElement).toHaveStyle(`background: ${Color.Primary}`);
  });

  it('should render a themed button.', async () => {
    // Arrange
    const { getByRole } = render(<Button theme="secondary" />);

    // Act
    const containerElement = getByRole('button');

    // Assert
    expect(containerElement).toHaveStyle(`background: ${Color.Secondary}`);
  });

  it('should render an outlined button.', async () => {
    // Arrange
    const { getByRole } = render(
      <Button theme="secondary" variant="outlined" />,
    );

    // Act
    const containerElement = getByRole('button');

    // Assert
    expect(containerElement).toHaveStyle(`border-color: ${Color.Secondary}`);
    expect(containerElement).toHaveStyle('background: transparent');
  });

  it('should render an icon button', async () => {
    // Arrange
    const { getByRole } = render(<Button variant="icon" />);

    // Act
    const containerElement = getByRole('button');

    // Assert
    expect(containerElement).toHaveStyle('border-radius: 50%');
    expect(containerElement).toHaveStyle('background: transparent');
    expect(containerElement).toHaveStyle('width: auto');
    expect(containerElement).toHaveStyle('height: auto');
  });

  it('background should override theme.', async () => {
    // Arrange
    const { getByRole } = render(
      <Button theme="secondary" background={Color.Error} />,
    );

    // Act
    const containerElement = getByRole('button');

    // Assert
    expect(containerElement).toHaveStyle(`background: ${Color.Error}`);
  });

  it('should contains a text children.', async () => {
    // Arrange
    const elementText = 'elementText';
    const { getByRole } = render(<Button>{elementText}</Button>);

    // Act
    const containerElement = getByRole('button');

    // Assert
    expect(containerElement.innerHTML).toBe(elementText);
  });

  it('should contains an element children.', async () => {
    // Arrange
    const elementChildren = <span>Element Children</span>;
    const { getByRole } = render(<Button>{elementChildren}</Button>);

    // Act
    const containerElement = getByRole('button');
    const countChildren = containerElement.getElementsByTagName('span').length;

    // Assert
    expect(countChildren).toBe(1);
  });

  it('loading should contains a svg indicator.', async () => {
    // Arrange
    const { getByRole } = render(<Button loading />);

    // Act
    const containerElement = getByRole('button');
    const countChildren = containerElement.getElementsByTagName('svg').length;

    // Assert
    expect(countChildren).toBe(1);
  });

  // it('should shade when mouse over.', async () => {
  //   // Arrange
  //   const rgb = parseToRgb(shade(0.1, Color.Primary));
  //   const stringRgb = `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
  //   const { getByRole } = render(<Button />);

  //   // Act
  //   const containerElement = getByRole('button');
  //   fireEvent.mouseOver(containerElement);

  //   // Assert
  //   await waitFor(() => {
  //     expect(containerElement).toHaveStyle(`background: ${stringRgb}`);
  //   });
  // });
});
