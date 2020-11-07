const getTitle = (value: any): string | null => {
  return value.title || value.name;
};

export default getTitle;
