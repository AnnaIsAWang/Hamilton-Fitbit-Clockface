export const pad2 = number => {
  return (number < 10 ? "0" : "") + number
};

export const round2 = number => {
  return Math.round(number * 100) / 100;
};

export const leaf = (obj, path) => (path.split('.').reduce((value, el) => value[el], obj))
