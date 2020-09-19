import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FaRegUserCircle, FaSearch } from 'react-icons/fa';

import Props from './dtos';
import Button from '.';

// Config and Controls
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: {
        type: 'inline-radio',
        options: ['basic', 'outlined', 'icon'],
      },
    },
    loading: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as Meta;

// Component
const Template: Story<Props> = args => {
  return <Button {...args}>{args.children}</Button>;
};

// Stories
export const Default = Template.bind({});
Default.args = {
  children: 'Basic',
  loading: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Outlined',
  variant: 'outlined',
  loading: false,
};
Outlined.parameters = {
  backgrounds: {
    default: 'Primary',
  },
};

export const Icon = Template.bind({});
Icon.args = {
  children: <FaRegUserCircle />,
  variant: 'icon',
  loading: false,
};
Icon.argTypes = {
  children: {
    control: {
      type: 'array',
      options: [{ key: 'circle', value: <FaRegUserCircle /> }],
    },
  },
  variant: {
    control: {
      type: 'inline-radio',
      options: ['basic', 'outlined', 'icon'],
    },
  },
  loading: { control: 'boolean' },
};
Icon.parameters = {
  backgrounds: {
    default: 'Primary',
  },
};
