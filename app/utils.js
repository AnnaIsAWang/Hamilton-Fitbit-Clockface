export const pad2 = number => {
  return (number < 10 ? "0" : "") + number
};

export const round2 = number => {
  return Math.round(number * 100) / 100;
};
