import React from 'react';
import { Story, Meta } from '@storybook/react';

import Props from './dtos';
import Movie from '.';

// Config and Controls
export default {
  title: 'Components/Movie',
  component: Movie,
  args: {
    id: 495764,
    favorite: false,
    poster: 'https://image.tmdb.org/t/p/w780/A50Ngq9lh9aCTGHC6kttrppHNoF.jpg',
  },
} as Meta;

// Component
const Template: Story<Props> = args => {
  return <Movie {...args} />;
};

// Stories
export const Default = Template.bind({});
