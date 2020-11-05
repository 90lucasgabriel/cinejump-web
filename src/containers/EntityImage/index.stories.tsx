import React from 'react';
import { Story, Meta } from '@storybook/react';

import Props from 'containers/EntityImage/dtos';
import { EntityImage } from 'containers';

// Config and Controls
export default {
  title: 'Containers/EntityImage',
  component: EntityImage,
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
  return <EntityImage {...args} />;
};

// Stories
export const Default = Template.bind({});
