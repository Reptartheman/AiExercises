export const safeDivision = (num1, num2) => {
  return new Promise((resolve, reject) => {
    num2 === 0 ? reject('Cannot divide by zero') : resolve(num1 / num2);
  })
}

const getRandomNumber = (min, max) => {
  return Math.random() * (min - max) + min;
};

const randomNumber = getRandomNumber(0, 9);

safeDivision(randomNumber, randomNumber);