const getOriginalTitle = (value: any): string | null => {
  return value.original_title || value.original_name;
};

export default getOriginalTitle;
