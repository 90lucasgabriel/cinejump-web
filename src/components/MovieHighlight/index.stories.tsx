import React from 'react';
import { Story, Meta } from '@storybook/react';

import Props from 'components/MovieHighlight/types';
import MovieHighlight from 'components/MovieHighlight';

// Config and Controls
export default {
  title: 'Components/MovieHighlight',
  component: MovieHighlight,
  argTypes: {
    showOverview: { control: 'boolean' },
    title: { control: 'text' },
    overview: { control: 'text' },
    backdrop: { control: 'text' },
    id: { control: 'number' },
  },
  args: {
    overview:
      'Hua Mulan é a espirituosa e determinada filha mais velha de um honrado guerreiro. Quando o Imperador da China emite um decreto que um homem de cada família deve servir no exército imperial, Mulan decide tomar o lugar de seu pai, que está doente. Assumindo a identidade de Hua Jun, ela se disfarça de homem para combater os invasores que estão atacando sua nação, provando-se uma grande guerreira. Hua Mulan é a espirituosa e determinada filha mais velha de um honrado guerreiro. Quando o Imperador da China emite um decreto que um homem de cada família deve servir no exército imperial, Mulan decide tomar o lugar de seu pai, que está doente. Assumindo a identidade de Hua Jun, ela se disfarça de homem para combater os invasores que estão atacando sua nação, provando-se uma grande guerreira.',
    id: 337401,
    title: 'Mulan',
    backdrop: 'https://image.tmdb.org/t/p/w780/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg',
  },
} as Meta;

// Component
const Template: Story<Props> = args => {
  return <MovieHighlight {...args} />;
};

// Stories
export const Default = Template.bind({});
