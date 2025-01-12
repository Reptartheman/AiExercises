/* 
  Exercise 15: Chain Delayed Messages
Create a function chainDelayedMessages that:

Takes an array of strings, named messages, and a delay (in milliseconds).
Returns a promise that:
Logs each message to the console after the specified delay.
Uses .then() to handle each message sequentially in the promise chain.
Returns a final message "All messages logged" after all messages have been logged.

*/
export const chainDelayedMessages = (array, delay) => {
  return array.reduce((promise, message, index) => {
    return promise.then(() => 
      new Promise((resolve) => {
        setTimeout(() => {
          console.log(message);
          resolve();
        }, delay * (index + 1));
      })
    );
  }, Promise.resolve())
  .then(() => "All messages logged"); // Return the final message
};

// Test the function
const messages = ["Hello", "World", "How", "Are", "You"];
chainDelayedMessages(messages, 300).then(console.log);


