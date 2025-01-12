export const createGreetingPromise = () => {
  return new Promise((resolve) => {
    resolve('Hello, Promise!');
  })
}

createGreetingPromise().then(value => value);