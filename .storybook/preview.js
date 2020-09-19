import { Color } from 'shared/enums';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    values: [
      { name: 'Light', value: Color.Fill },
      { name: 'Primary', value: Color.Primary },
      { name: 'Secondary', value: Color.Secondary },
      { name: 'Dark', value: Color.Text },
    ],
  },
};
