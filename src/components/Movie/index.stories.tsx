import React from 'react';
import { Story, Meta } from '@storybook/react';

import Props from './dtos';
import Movie from '.';

// Config and Controls
export default {
  title: 'Components/Movie',
  component: Movie,
  argTypes: {
    favorite: { control: 'boolean' },
    poster: { control: 'text' },
    backdrop: { control: 'text' },
    id: { control: 'number' },
  },
  args: {
    id: 495764,
    favorite: true,
    poster: 'https://image.tmdb.org/t/p/w780/A50Ngq9lh9aCTGHC6kttrppHNoF.jpg',
  },
} as Meta;

// Component
const Template: Story<Props> = args => {
  return <Movie {...args} />;
};

// Stories
export const Default = Template.bind({});
