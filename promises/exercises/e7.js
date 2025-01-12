export const delayedError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error after delay');
    })
  }).then(value => value)
    .catch(err => err);
}