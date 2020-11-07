const getSubtitle = (value: any): string | null => {
  return (
    value.release_date?.substring(0, 4) ||
    value.first_air_date?.substring(0, 4) ||
    (value.known_for && value.gender === 2
      ? 'Conhecido por: '
      : 'Conhecida por')
  );
};

export default getSubtitle;
