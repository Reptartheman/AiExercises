export const doubleMeDaddy = (number) => {
  return new Promise((resolve) => {
    resolve(number * 2)
  }).then(value => value * 2);
}

console.log(doubleMeDaddy(2).then(result => console.log(result)));