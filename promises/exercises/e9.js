export const immediateResolution = () => {
  return new Promise(resolve => resolve('Immediate Success!'));
}

immediateResolution()
  .then(value => value);