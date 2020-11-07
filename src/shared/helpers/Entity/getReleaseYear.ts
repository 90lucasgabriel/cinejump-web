const getReleaseYear = (value: any): string => {
  return (
    value.release_date?.substring(0, 4) ||
    value.first_air_date?.substring(0, 4) ||
    value.birthday?.substring(0, 4)
  );
};

export default getReleaseYear;
