export const resolveOrReject = (boolean) => {
  const myPromise = new Promise((resolve, reject) => {
    boolean ? resolve('Success!') : reject('Failure!');
  });
  return myPromise;
}

const randomBoolean = Math.random() < 0.5;

resolveOrReject(randomBoolean)
  .then(value => value)
  .catch(err => err);