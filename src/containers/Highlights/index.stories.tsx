import React from 'react';
import { Story, Meta } from '@storybook/react';

import Props from 'containers/Highlights/types';
import Highlights from 'containers/Highlights';

// Config and Controls
export default {
  title: 'Containers/Highlights',
  component: Highlights,
  argTypes: {
    movies: { control: 'object' },
    theme: {
      control: {
        type: 'inline-radio',
        options: ['', 'primary', 'secondary', 'light'],
      },
    },
    background: { control: 'color' },
    color: { control: 'color' },
  },
  args: {
    movies: [
      {
        overview:
          'Hua Mulan é a espirituosa e determinada filha mais velha de um honrado guerreiro. Quando o Imperador da China emite um decreto que um homem de cada família deve servir no exército imperial, Mulan decide tomar o lugar de seu pai, que está doente. Assumindo a identidade de Hua Jun, ela se disfarça de homem para combater os invasores que estão atacando sua nação, provando-se uma grande guerreira.',
        id: 337401,
        title: 'Mulan',
        backdrop:
          'https://image.tmdb.org/t/p/w780/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg',
      },
      {
        overview:
          'Para deter um assassino em série, um meticuloso inspetor conta com a ajuda de um nerd apaixonado por quadrinhos.',
        id: 438396,
        title: 'Origens Secretas',
        backdrop:
          'https://image.tmdb.org/t/p/w780/qGZe9qTuydxyJYQ60XDtEckzLR8.jpg',
      },
      {
        overview:
          'A península coreana ficou devastada após o surto de zumbis que atingiu os passageiros de um trem-bala com destino a Busan há quatro anos. Com isso, um ex-soldado que conseguiu fugir do país, Jung-seok, tem a missão de retornar e acaba encontrando alguns sobreviventes.',
        id: 581392,
        title: 'Invasão Zumbi 2: Península',
        backdrop:
          'https://image.tmdb.org/t/p/w780/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg',
      },
      {
        overview:
          'Um ex-soldado, uma adolescente e um policial varrem New Orleans em busca de uma pílula perigosa que desperta superpoderes temporários.',
        id: 605116,
        title: 'Power',
        backdrop:
          'https://image.tmdb.org/t/p/w780/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg',
      },
    ],
  },
} as Meta;

// Component
const Template: Story<Props> = args => {
  return <Highlights {...args} />;
};

// Stories
export const Default = Template.bind({});

export const OneMovie = Template.bind({});
OneMovie.args = {
  movies: [
    {
      overview:
        'Hua Mulan é a espirituosa e determinada filha mais velha de um honrado guerreiro. Quando o Imperador da China emite um decreto que um homem de cada família deve servir no exército imperial, Mulan decide tomar o lugar de seu pai, que está doente. Assumindo a identidade de Hua Jun, ela se disfarça de homem para combater os invasores que estão atacando sua nação, provando-se uma grande guerreira.',
      id: 337401,
      title: 'Mulan',
      backdrop:
        'https://image.tmdb.org/t/p/w780/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg',
    },
  ],
};

export const TwoMovies = Template.bind({});
TwoMovies.args = {
  movies: [
    {
      overview:
        'Hua Mulan é a espirituosa e determinada filha mais velha de um honrado guerreiro. Quando o Imperador da China emite um decreto que um homem de cada família deve servir no exército imperial, Mulan decide tomar o lugar de seu pai, que está doente. Assumindo a identidade de Hua Jun, ela se disfarça de homem para combater os invasores que estão atacando sua nação, provando-se uma grande guerreira.',
      id: 337401,
      title: 'Mulan',
      backdrop:
        'https://image.tmdb.org/t/p/w780/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg',
    },
    {
      overview:
        'Para deter um assassino em série, um meticuloso inspetor conta com a ajuda de um nerd apaixonado por quadrinhos.',
      id: 438396,
      title: 'Origens Secretas',
      backdrop:
        'https://image.tmdb.org/t/p/w780/qGZe9qTuydxyJYQ60XDtEckzLR8.jpg',
    },
  ],
};
