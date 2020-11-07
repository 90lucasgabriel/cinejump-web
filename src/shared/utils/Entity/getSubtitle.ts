const getSubtitle = (value: any): string | null => {
  return (
    value.release_date?.substring(0, 4) ||
    value.first_air_date?.substring(0, 4) ||
    (value.known_for && 'Conhecido(a) por: ')
  );
};

export default getSubtitle;
