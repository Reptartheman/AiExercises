export const controlledDelayChain = (number) => {
  return new Promise((resolve) => {
      resolve(number + 2);
  })
}

controlledDelayChain(5)
  .then(value => {
    setTimeout(() => {
      return value;
    }, 1000);
  });