const getOriginalDate = (value: any): string => {
  return value?.release_date || value?.first_air_date || value?.birthday;
};

export default getOriginalDate;
