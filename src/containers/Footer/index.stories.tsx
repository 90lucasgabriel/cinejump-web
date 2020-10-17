import React from 'react';
import { Story, Meta } from '@storybook/react';

import Footer from 'containers/Footer';

// Config and Controls
export default {
  title: 'Containers/Footer',
  component: Footer,
  argTypes: {
    theme: {
      control: {
        type: 'inline-radio',
        options: ['', 'primary', 'secondary', 'light'],
      },
    },
    background: { control: 'color' },
    color: { control: 'color' },
  },
  args: {},
} as Meta;

// Component
const Template: Story<any> = args => {
  return <Footer {...args} />;
};

// Stories
export const Default = Template.bind({});
Default.args = {};
