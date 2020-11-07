const arrayToString = (list: any[], key?: string): string => {
  let data = '';

  let parsedList = list;
  if (key) {
    parsedList = parsedList.map(item => item[key]);
  }

  parsedList.forEach((item, index) => {
    data = `${data}${item}`;

    if (index === parsedList.length - 2) {
      data = `${data} e `;
      return;
    }

    if (index !== parsedList.length - 1) {
      data = `${data}, `;
    }
  });

  return data;
};

export default arrayToString;
