const getCharacter = (value: any): string => {
  return value.character?.toUpperCase().includes('SELF') ? '' : value.character;
};

export default getCharacter;
