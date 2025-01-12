/* 
Exercise 11: Chain Arithmetic Operations
Create a function chainArithmetic that:

Accepts a number.
Returns a promise that:
Adds 5 to the number.
Chains a .then() to multiply the result by 3.
Chains another .then() to subtract 2 from the result.
Returns the final result after all transformations.
*/


export const chainArithmetic = (num) => {
  return Promise.resolve(num + 5)
  .then(val => val)
  .then(val => val * 3)
  .then(val => val - 2);
};

chainArithmetic(2).then(val => val);
  