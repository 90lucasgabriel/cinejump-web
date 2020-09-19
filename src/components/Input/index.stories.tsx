import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FaRegUserCircle } from 'react-icons/fa';

import Props from './dtos';
import Input from '.';

// Config and Controls
export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

// Component
const Template: Story<Props> = args => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Form ref={formRef} onSubmit={() => console.log('submitted')}>
      <Input {...args} />
    </Form>
  );
};

// Stories
export const Default = Template.bind({});
Default.args = {
  name: 'email',
  icon: FaRegUserCircle,
  containerStyle: { fontSize: 'auto' },
};

Default.argTypes = {
  icon: {
    control: {
      type: 'select',
      options: [FaRegUserCircle, null],
    },
  },
};
