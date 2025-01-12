const messages = ["Hello", "World", "How", "Are", "You"];


const chainDelayedMessages = (array, delay) => {
  return new Promise((resolve) => {
    resolve(
      array.forEach((elem, index) => {
        setTimeout(()=> {
          if (index !== 0) {
            delay = (delay * index + 1);
          } else {
            delay = (delay * index);
          }
          console.log(elem)
        }, delay);
      })
    )
  })
  .then(val => val)
  .then(()=> console.log("All messages logged"));
    
}

chainDelayedMessages(messages, 300).then(val => val);
  
