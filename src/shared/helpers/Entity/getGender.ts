const getGender = (value: any): string => {
  return value.gender === 2 ? 'Masculino' : 'Feminino';
};

export default getGender;
