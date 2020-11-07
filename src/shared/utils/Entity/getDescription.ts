import { arrayToString } from 'shared/utils';

const getDescription = (value: any): string | null => {
  return (
    (value.overview && value.overview) ||
    (value.known_for &&
      arrayToString(
        value.known_for.map((item: any) => ({
          title: item.title || item.name,
        })),
        'title',
      ))
  );
};

export default getDescription;
