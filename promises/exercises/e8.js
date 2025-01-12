export const conditionalPromise = (number) => {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve('Even number')
    } else {
      reject('Odd number');
    }
  }).then(value => value)
    .catch(result => result);
}


const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randomNumber = getRandomNumber(0, 9);

conditionalPromise(randomNumber).then(value => console.log(value));