const randomInteger = (min = 0, max = 0): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export default randomInteger;
