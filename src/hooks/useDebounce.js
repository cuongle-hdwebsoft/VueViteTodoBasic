const useDebounce = () => {
  let t = null;

  const handler = (cb, delay) => {
    if(t) {
      clearTimeout(t);
    }

    t = setTimeout(() => {
      cb();
    }, delay);
  };

  return {
    handler
  };
};

export default useDebounce;