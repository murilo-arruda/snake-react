export const calcUnits = ({ w, h, snakeSize }) => {
  const wUnit = w / snakeSize;
  const hUnit = h / snakeSize;
  return { wUnit, hUnit };
};

export const calcSize = ({ snakeSize, sizeRest, value }) => {
  if (snakeSize / 2 < sizeRest) {
    return value + (snakeSize - sizeRest);
  } else {
    return value - sizeRest;
  }
};
