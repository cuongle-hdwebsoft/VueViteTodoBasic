export const sum = (...args) => {
  return args.reduce((prev, cur) => prev + cur, 0);
};

export default sum;
