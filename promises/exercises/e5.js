export const logMessageAfterDelay = () => {
  return new Promise((resolve => {
    setTimeout(() => {
      resolve('Delayed Message');
    }, 1000);
  }))
}

logMessageAfterDelay()
  .then(message => console.log(message));