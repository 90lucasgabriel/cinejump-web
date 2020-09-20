import React from 'react';
import { Story, Meta } from '@storybook/react';

import Props from 'containers/MovieList/dtos';
import MovieList from 'containers/MovieList';

// Config and Controls
export default {
  title: 'Containers/MovieList',
  component: MovieList,
  argTypes: {
    data: { control: 'object' },
    title: { control: 'text' },
    message: { control: 'text' },
    isLoading: { control: 'boolean' },
    loaderColor: { control: 'color' },
    theme: {
      control: {
        type: 'inline-radio',
        options: ['', 'primary', 'secondary', 'light'],
      },
    },
    background: { control: 'color' },
    color: { control: 'color' },
  },
  args: {
    data: [
      {
        id: 337401,
        poster:
          'https://image.tmdb.org/t/p/w780/72I82eKXCadZWEYygV9GkJOQNEq.jpg',
      },
      {
        id: 581392,
        backdrop:
          'https://image.tmdb.org/t/p/w780/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg',
        favorite: true,
      },
      {
        id: 438396,
        poster:
          'https://image.tmdb.org/t/p/w780/t28nWRyiwT2cI0KwXYLPwnNltUV.jpg',
        favorite: true,
      },
      {
        id: 605116,
        poster:
          'https://image.tmdb.org/t/p/w780/38teDX74nsxkv2ysWvNT5EPXQ9E.jpg',
      },
      {
        id: 721452,
        poster:
          'https://image.tmdb.org/t/p/w780/95KNDpdOgvIfIKzLgQbVZSZgba0.jpg',
        favorite: true,
      },
      {
        id: 623491,
        poster:
          'https://image.tmdb.org/t/p/w780/1JnolYGDrhgo5y3rOb0S1VErF4f.jpg',
        favorite: true,
      },
      {
        id: 38700,
        poster:
          'https://image.tmdb.org/t/p/w780/sTKl7J5OWnsZSTRiKPIvPx4ngBG.jpg',
      },
      {
        id: 495764,
        poster:
          'https://image.tmdb.org/t/p/w780/A50Ngq9lh9aCTGHC6kttrppHNoF.jpg',
      },
      {
        id: 577922,
        poster:
          'https://image.tmdb.org/t/p/w780/k68nPLbIST6NP96JmTxmZijEvCA.jpg',
      },
      {
        id: 547016,
        backdrop:
          'https://image.tmdb.org/t/p/w780/m0ObOaJBerZ3Unc74l471ar8Iiy.jpg',
      },
      {
        id: 475557,
        poster:
          'https://image.tmdb.org/t/p/w780/xLxgVxFWvb9hhUyCDDXxRPPnFck.jpg',
      },
      {
        id: 385103,
        poster:
          'https://image.tmdb.org/t/p/w780/p7RjlzDLV4KksrWtyve1Rg40nLv.jpg',
      },
    ],
  },
} as Meta;

// Component
const Template: Story<Props> = args => {
  return <MovieList {...args} />;
};

// Stories
export const Default = Template.bind({});

export const Basic = Template.bind({});
Basic.args = {
  theme: 'primary',
  title: 'Popular movies',
};

export const Empty = Template.bind({});
Empty.args = {
  title: 'Empty data',
  data: [],
  message: 'Custom message',
};
