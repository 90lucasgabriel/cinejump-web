import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Color } from 'shared/enums';
import Footer from '.';

// Config and Controls
export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {},
  args: {},
} as Meta;

// Component
const Template: Story<any> = args => {
  return <Footer {...args} />;
};

// Stories
export const Default = Template.bind({});
Default.args = {};
