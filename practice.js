const arrayOfStuff = ['oops', 'latter', 56, true, false, 'please', 'clams', 46, 22, 'alphabet'];

const objectOfStuff = {
  thing1: 'long sprays of juice',
  thing2: 'Oppenheimer Mcgee',
  thing3: 'Why Taylor Swift?',
  thing4: 4,
  thing5: 'Tomorrow never dies',
  thing6: true,
  thing7: 'Owen Wilson saying Wow!'
}

const secondObject = {
  thing1: 'wobbly sparks',
  thing2: false,
  newThing3: 'No no no',
  newThing4: 'Yes',
  newThing5: 456,
  newThing6: 'make sure you pay',
  newThing7: 'Russel Wilson says no!'
}

const arrayOfObjects = [{
  
}]

//Write a function that takes an array and an index as arguments and returns the element at that index.
function returnElement(array, index) {
  for (let i = 0; i < array.length; i++) {
    return array[index];
  }
}
//console.log(returnElement(arrayOfStuff, 2));

//Write a function that adds a new element to the end of arrayOfStuff.
function addElement(array, newElm) {
  array.push(newElm);
  return array;
}
//console.log(addElement(arrayOfStuff, 6));

//Write a function that removes the last element from arrayOfStuff.
function removeElement(array) {
  return array.pop();
}
//console.log(removeElement(arrayOfStuff))

//Write a function that logs each element of arrayOfStuff to the console.
function logElements(array) {
  return array.forEach(element => console.log(element))
}
//console.log(logElements(arrayOfStuff));

//Write a function that returns a new array containing only the string elements from arrayOfStuff.
function onlyStrings(array) {
  return array.filter(elem => typeof elem === 'string' ? elem : false);
}
//console.log(onlyStrings(arrayOfStuff));

//Write a function that takes an object and a key as 
//arguments and returns the value associated with that key.
function returnValues(obj, key) {
  return obj[key];
}
//console.log(returnValues(objectOfStuff, 'thing3'));

//Write a function that adds a new key-value pair to objectOfStuff.

function newPair(obj, key) {
  return obj[key] = value;
}
//console.log(newPair(objectOfStuff, 'thing8', 'Johnny Unitas'));

//Write a function that removes a key-value pair from objectOfStuff.
function removePair(obj, key) {
   delete obj[key];
   return obj;
}
//console.log(removePair(objectOfStuff, 'thing2'));

//Write a function that logs each key-value pair in objectOfStuff to the console.
function logKeysAndValues(obj) {
  return console.log(obj);
}
//logKeysAndValues(objectOfStuff);

//Write a function that returns an array of all the keys in objectOfStuff.
function giveMeYourKeysYouDrunkHuman(obj) {
  return Object.keys(obj);
}
//console.log(giveMeYourKeysYouDrunkHuman(objectOfStuff));

//Write a function that takes arrayOfStuff and objectOfStuff 
//and returns a new array containing all the values from both.
function tellMeYourValues(array, obj) {
  const result1 = Object.values(obj);
  array.push(result1);
  return array.flat();
}
//console.log(tellMeYourValues(arrayOfStuff, objectOfStuff));

//Write a function that takes arrayOfStuff and objectOfStuff and 
//returns a new object where the keys are the indices of arrayOfStuff and 
//the values are the corresponding elements from arrayOfStuff.

function combineDemShits(array) {
  const newObject = {};

  array.forEach((value, index) => {
    newObject[index] = value;
  })
  return newObject;
}




/* const result = combineDemShits(arrayOfStuff);
console.log(result); */

//Write a function that takes an element from arrayOfStuff and 
//returns a message indicating its type (e.g., "This is a string", "This is a number").

function tellMeYourType(array) {
  array.forEach((item) => {
    console.log(`This is a ${typeof item}`);
  })
}
//tellMeYourType(arrayOfStuff);

//Write a function that takes a key from objectOfStuff and returns 
//a message indicating whether the value is a string, number, or boolean.

function whatIsYourType(obj) {
  const newArray = Object.values(obj);
  return newArray.forEach((item) => {
    console.log(`This is a ${typeof item}`);
  })
}
//whatIsYourType(objectOfStuff);

//Write a function that takes a string from objectOfStuff and returns the string in uppercase.

function makeMeUpperCaseBaby(object) {
  let newObject = {};
  for (let key in object) {
    if (typeof object[key] === 'string') {
      newObject[key] = object[key].toUpperCase();
    } else {
      newObject[key] = object[key];
    }
  }
  return newObject;
}
//console.log(makeMeUpperCaseBaby(objectOfStuff));

//Write a function that takes a string from 
//objectOfStuff and returns the number of characters in the string.

function howLargeAreYou(object) {
  let newObject = {};
  for (let key in object) {
    if (typeof object[key] === 'string') {
      newObject[key] = object[key].length;
    } else {
      newObject[key] = object[key];
    }
  }
  return newObject;
}

//console.log(howLargeAreYou(objectOfStuff));

//Write a function that uses map to create a 
//new array where each string in arrayOfStuff is converted to uppercase.

function makeMeUpperCase(array) {
  return array.map((elem) => {
    if (typeof elem === 'string') {
      return elem.toUpperCase()
    } else {
      return elem;
    }
  }); 
}

//console.log(makeMeUpperCase(arrayOfStuff));

//Write a function that uses filter to create a 
//new array containing only the boolean values from arrayOfStuff.

function booleansOnly(array) {
  return array.filter(elem => typeof elem === 'boolean');
}

//console.log(booleansOnly(arrayOfStuff));

//Write a function that uses 
//Object.keys to return an array of keys from objectOfStuff that start with "thing".

function youAreDrunkGiveMeYourKeys(object) {
  const keys = Object.keys(object);
  return keys.filter(key => key.startsWith('thing'));
}
//console.log(youAreDrunkGiveMeYourKeys(objectOfStuff));

//Write a function that uses Object.values to 
//return an array of values from objectOfStuff that are strings.
function moreValues(object) {
  const values = Object.values(object)
  return values.filter(value => typeof value === 'string');
}
//console.log(moreValues(objectOfStuff));

//Write a function that takes arrayOfStuff and objectOfStuff and returns 
//a new object where each key is a value from arrayOfStuff and the 
//value is the corresponding value from objectOfStuff 
//(assume arrayOfStuff has the same length as the number of keys in objectOfStuff).

function comboPlatterNumberOne(array, object) {
  let newObject = {};
  let keys = Object.keys(object);
  
  for (let i = 0; i < array.length; i++) {
    if (i < keys.length) {
      newObject[array[i]] = object[keys[i]];
    }
  }
  
  return newObject;
}
//console.log(comboPlatterNumberOne(arrayOfStuff, objectOfStuff));

//Write a function that takes arrayOfStuff and objectOfStuff and 
//returns an array where each element is a 
//string combining an element from arrayOfStuff and a value from objectOfStuff.

function comboPlatterNumberTwo(array, object) {
  const result = [];
  const values = Object.values(object)

  for (let i = 0; i < array.length && values.length; i++) {
    result.push(`${array[i]} ${values[i]}`)
  }

  return result;

}
//console.log(comboPlatterNumberTwo(arrayOfStuff, objectOfStuff));
// output will ['arrayOfStuff element with value from objectOfStuff'];

//Write a function that reverses arrayOfStuff.

function reverseMe(array) {
  return array.reverse();
}
//console.log(reverseMe(arrayOfStuff))

//Write a function that returns the first n elements of arrayOfStuff.

function nElements(array, num) {
  return array.slice(0, num);
}
//console.log(nElements(arrayOfStuff, 4))

//Write a function that merges two objects. If both objects have the same key, 
//the value from the second object should overwrite the value from the first.

function mergeObjects(objOne, objTwo) {
  return Object.assign(objOne, objTwo);
}

//console.log(mergeObjects(objectOfStuff, secondObject));

//Write a function that swaps the keys and values of objectOfStuff.

function swapProps(object) {
  const keys = Object.keys(object);
  const values = Object.values(object);
  const newObject = {};

  for (let i = 0; i < keys.length && values.length; i++) {
    newObject[values[i]] = keys[i]
  }
  return newObject
}
//console.log(swapProps(objectOfStuff));

//Write a function that uses 
//reduce to sum all the numerical values in arrayOfStuff.

function sumNumbers(array) {
  return array.filter(elem => typeof elem === 'number')
  .reduce((prev, curr) => prev + curr);
}

//console.log(sumNumbers(arrayOfStuff));

//Write a function that uses reduce to create a single string from all the string elements in arrayOfStuff.
function pullSomeStrings(array) {
  return array.filter(elem => typeof elem === 'string')
  .reduce((prev, curr) => prev + curr);
}
//console.log(pullSomeStrings(arrayOfStuff));

//Write a function that returns an object where the keys are elements from 
//arrayOfStuff and the values are arrays containing the corresponding key-value pairs from objectOfStuff.
function bigBoySwap(object, array) {
  const newObject = {};
  const entries = Object.entries(object)
  
  for (let i = 0; i < array.length && entries.length; i++) {
      newObject[array[i]] = [entries[i]];
  }
  return newObject;
}
//console.log(bigBoySwap(objectOfStuff, arrayOfStuff))

//Write a function that returns an array of objects, each containing a key-value 
//pair from objectOfStuff and an element from arrayOfStuff.

function arrayOfObjects(array, object) {
  const keys = Object.keys(object);
  const values = Object.values(object);
  const result = [];
  for (let i = 0; i < keys.length && values.length && array.length; i++) {
    const newObject = {};
    const prop1 = 'key';
    const prop2 = 'value';
    const prop3 = "element";
    newObject[prop1] = keys[i];
    newObject[prop2] = values[i];
    newObject[prop3] = array[i];
    result.push(newObject);
  }
  return result;

}
//console.log(arrayOfObjects(arrayOfStuff, objectOfStuff));

function arrayOfObjects2(array, object) {
  const keys = Object.keys(object);
  const values = Object.values(object);
  const result = [];
  for (let i = 0; i < keys.length && values.length && array.length; i++) {
    const outerObject = {};
    const innerObject = {};
    const prop1 = 'key';
    const prop2 = 'value';
    const prop3 = array[i];
    innerObject[prop1] = keys[i];
    innerObject[prop2] = values[i];
    outerObject[prop3] = innerObject;
    result.push(outerObject);
  }
  return result;

}

//console.log(arrayOfObjects2(arrayOfStuff, objectOfStuff));

/* Exercise 16: Conditional Logic with Arrays and Objects */
//1. Write a function that returns an array of all the 
//keys from objectOfStuff whose values are strings.

function puppetStrings(object) {
  const keys = Object.keys(object);
  const values = Object.values(object);
  const stringKeys = [];

  for (let i = 0; i < keys.length; i++) {
    if (typeof values[i] === 'string') {
      stringKeys.push(keys[i]);
    }
  }

  return stringKeys;
}

//console.log(puppetStrings(objectOfStuff));

//2. Write a function that returns a new array where each element is either the string "Even" or "Odd" 
//depending on whether the corresponding element in arrayOfStuff is a number and even or odd.

function thatsEvenOrOdd(array) {
  return array.map(elem => {
    if (typeof elem === 'number') {
      return elem % 2 === 0 ? 'Even' : 'Odd';
    } else {
      return 'Not a number';
    }
  })
}
//console.log(thatsEvenOrOdd(arrayOfStuff));

/*   Exercise 17: Sorting and Filtering  */

//17.1: Write a function that sorts arrayOfStuff in alphabetical order (for strings) and ascending order (for numbers).

function sortThatShit(array) {
  const result = [];

  const strings = array.filter(elem => typeof elem === 'string');
  const numbers = array.filter(elem => typeof elem === 'number');
  const booleans = array.filter(elem => typeof elem === 'boolean');

  const sortStrings = strings.sort();
  const sortNumbers = numbers.sort((a, b) => a - b);

  result.push(sortStrings, sortNumbers, booleans);
  return result.flat();
}

function sortThatShitRefactor(array) {
  const strings = array.filter(elem => typeof elem === 'string');
  const numbers = array.filter(elem => typeof elem === 'number');
  const booleans = array.filter(elem => typeof elem === 'boolean');

  const sortStrings = strings.sort();
  const sortNumbers = numbers.sort((a, b) => a - b);

  const result = [...sortStrings, ...sortNumbers, ...booleans];
  return result;
}

//console.log(sortThatShit(arrayOfStuff));




//17.2: Write a function that filters objectOfStuff to only include key-value pairs where the value is a string.

function stringsOnly(object) {
  const newObject = {};
  const entries = Object.entries(object);
  const filter = entries.filter(elem => typeof elem === 'string');

  console.log(filter);
}

/* ANSWER */

function filterStringsOnly(object) {
  const result = {};

  for (const key in object) {
    if (typeof object[key] === 'string') {
      result[key] = object[key];
    }
  }

  return result;
}

//console.log(filterStringsOnly(objectOfStuff));

/* Exercise 18: Searching  */
//1. Write a function that returns the index of the first occurrence of a boolean value in arrayOfStuff.

function giveMeTheBools(array) {
  return array.findIndex(elem => typeof elem === 'boolean');
}
//console.log(giveMeTheBools(arrayOfStuff));



//2. Write a function that returns the key for the first occurrence of the value "Owen Wilson saying Wow!" in objectOfStuff.
function findOwen(object) {
  const keys = Object.keys(object);
  const values = Object.values(object);

  for (let i = 0; i < keys.length && values.length; i++) {
    if (values[i] === 'Owen Wilson saying Wow!') {
      return keys[i];
    }
  }

}
console.log(findOwen(objectOfStuff));
/* 

Exercise 19: Transformations
Write a function that transforms arrayOfStuff into an object where each key is the type of the element and the value is an array of elements of that type.
Write a function that transforms objectOfStuff into an array of strings formatted as "key: value".
Exercise 20: Validation
Write a function that validates if arrayOfStuff contains only strings and booleans.
Write a function that checks if all the values in objectOfStuff are unique.


*/



