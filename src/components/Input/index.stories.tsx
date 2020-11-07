import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FaRegUserCircle } from 'react-icons/fa';

import Props from 'components/Input/types';
import Input from 'components/Input';

// Config and Controls
export default {
  title: 'Components/Input',
  component: Input,
  args: {
    name: 'inputName',
    containerStyle: { fontSize: 'auto' },
    placeholder: 'Input placeholder',
  },
  argTypes: {
    name: { control: 'text' },
    placeholder: { control: 'text' },
    icon: {
      control: {
        type: 'select',
        options: [FaRegUserCircle, null],
      },
    },
  },
} as Meta;

// Component
const Template: Story<Props> = args => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Form
      ref={formRef}
      onSubmit={() => console.log('submitted')}
      style={{ width: '500px' }}
    >
      <Input {...args} />
    </Form>
  );
};

// Stories
export const Default = Template.bind({});

// With icon
export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: FaRegUserCircle,
};
