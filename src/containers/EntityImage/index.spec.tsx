import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';

import { Color, EntityType } from 'shared/enums';
import EntityImage from 'containers/EntityImage';

const mockedUpdateFavorite = jest.fn();
const mockedHistoryPush = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('EntityImage Component', () => {
  it('should render a movie with poster.', () => {
    // Arrange
    const { container, getByRole } = render(
      <EntityImage
        id={1234}
        favorite={false}
        poster="image.jpg"
        mediaType={EntityType.MOVIE}
      />,
    );

    // Act
    const imageElement = getByRole('img');

    // Assert
    expect(container).not.toBeEmptyDOMElement();
    expect(imageElement).toBeTruthy();
  });

  it('should render a movie with backdrop.', () => {
    // Arrange
    const { container, getByRole } = render(
      <EntityImage
        id={1234}
        favorite={false}
        backdrop="image.jpg"
        mediaType={EntityType.MOVIE}
      />,
    );

    // Act
    const imageElement = getByRole('img');

    // Assert
    expect(container).not.toBeEmptyDOMElement();
    expect(imageElement).toBeTruthy();
  });

  it('should not render a movie when poster and backdrop are null.', () => {
    // Arrange and Act
    const { container } = render(
      <EntityImage id={1234} favorite={false} mediaType={EntityType.MOVIE} />,
    );

    // Assert
    expect(container).toBeEmptyDOMElement();
  });

  // TODO: Assert useCallbacks
  it('* should redirect to movie when clicked.', async () => {
    // Arrange
    const handleRedirect = jest.fn();
    const { getByRole } = render(
      <EntityImage
        id={1234}
        favorite={false}
        poster="image.jpg"
        mediaType={EntityType.MOVIE}
      />,
    );

    // Act
    act(() => {
      const imageElement = getByRole('img');
      fireEvent.click(imageElement);
    });

    // Assert
    // await waitFor(() => {
    //   expect(handleRedirect).toHaveBeenCalled();
    // });
  });

  // TODO: Mocks
  it('* should check favorite when logged in.', async () => {
    // Arrange
    jest.mock('domains/Auth/hooks', () => {
      return {
        useAuth: () => ({
          user: { token: 'token', user: {} },
        }),
      };
    });

    jest.mock('domains/Favorites/hooks', () => {
      return {
        useFavorite: () => ({
          favoriteList: [],
        }),
      };
    });

    const { getByRole } = render(
      <EntityImage
        id={1234}
        favorite={false}
        poster="image.jpg"
        mediaType={EntityType.MOVIE}
      />,
    );

    // Act
    const iconButtonElement = getByRole('button');
    const iconFill = iconButtonElement
      .getElementsByTagName('svg')[0]
      .getAttribute('fill');

    // Assert
    expect(iconFill).toEqual(Color.Empty);
  });

  // TODO: Mocks
  it('* should check favorite.', async () => {
    // Arrange
    jest.mock('domains/Auth/hooks', () => {
      return {
        useAuth: () => ({
          user: { token: 'token', user: {} },
        }),
      };
    });

    jest.mock('domains/Favorites/hooks', () => {
      return {
        useFavorite: () => ({
          favoriteList: [{ movieId: 1234 }, { movieId: 2345 }],
        }),
      };
    });

    const { getByRole } = render(
      <EntityImage
        id={1234}
        favorite={false}
        poster="image.jpg"
        mediaType={EntityType.MOVIE}
      />,
    );

    // Act
    const imageElement = getByRole('button');

    // Assert
    await waitFor(() => {
      expect(imageElement).toBeTruthy();
    });
  });

  // TODO: Assert useCallbacks
  it('* should fire handleFavorite when favorite icon clicked.', async () => {
    // Arrange
    jest.mock('domains/Auth/hooks', () => {
      return {
        useAuth: () => ({
          user: { token: 'token', user: {} },
        }),
      };
    });

    jest.mock('domains/Favorites/hooks', () => {
      return {
        useFavorite: () => ({
          favoriteList: [{ movieId: 1234 }, { movieId: 2345 }],
          UpdateFavorite: mockedUpdateFavorite,
        }),
      };
    });

    const { getByRole } = render(
      <EntityImage
        id={1234}
        favorite={false}
        poster="image.jpg"
        mediaType={EntityType.MOVIE}
      />,
    );

    // Act
    const iconButtonElement = getByRole('button');
    const iconFill = iconButtonElement
      .getElementsByTagName('svg')[0]
      .getAttribute('fill');
    act(() => {
      fireEvent.click(iconButtonElement);
    });

    jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect);

    // Assert
    // await waitFor(() => {
    //   expect(mockedUpdateFavorite).toHaveBeenCalled();
    // });
    expect(iconFill).toEqual(Color.Empty);
  });
});
