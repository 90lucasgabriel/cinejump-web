import React from 'react';
import { Story, Meta } from '@storybook/react';

import Tooltip from 'components/Tooltip';

// Config and Controls
export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    value: { control: 'text' },
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
  return <Tooltip {...args}>{args.children}</Tooltip>;
};

// Stories
export const Default = Template.bind({});
Default.args = {
  value: 'Tooltip message.',
  children: (
    <div style={{ border: '1px solid', padding: '10px' }}>
      Children component hover
    </div>
  ),
};
