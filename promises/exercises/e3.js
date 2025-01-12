export const incrementValue = (number) => {
  return new Promise(resolve => resolve(number + 1))
  .then(value => value + 1);
}

console.log(incrementValue(5).then(result => console.log(result)));


