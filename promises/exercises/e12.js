/* 
  Exercise 12: Delayed String Formatter
Create a function delayedFormatString that:

Accepts a string and a delay (in milliseconds).
Returns a promise that:
Resolves after the specified delay with the uppercase version of the string.
Chains another .then() to append "!!!" to the uppercase string.
Returns the final formatted string after both transformations.

*/

export const delayedFormatString = (string, num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(string.toUpperCase());
    }, num)
  })
    .then(val => `${val}!!!`);

    
}

delayedFormatString('hello').then(val => val);