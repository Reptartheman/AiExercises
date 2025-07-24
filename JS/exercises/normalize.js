// Array + Modulo Practice Exercises
// Theme: Music Sequencer Logic

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const numbers = [0, 2, 6, 45, 7, 90, 13, 20, 49, 77, 12, 78, 200, 41, 42, 10];


// Super Simple Modulo + Loop + Array Practice

// 1. Even Index Logger
// Log every element at an even index from the array
function logEvenIndexes(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result.push(arr[i])
    }
  }
  logger(result);
  // Example input: ['a', 'b', 'c', 'd', 'e']
}

//const evenIndices = logEvenIndexes(letters);

// 2. Divisible by 3
// Return all numbers from 0–20 that are divisible by 3
function getDivisibleByThree() {
  let result = [];
  for (let i = 0; i < 20; i++) {
    if (i % 3 === 0) {
      result.push(i)
    }
  }
  return result;
  // Expected: [0, 3, 6, 9, 12, 15, 18]
}

//const byThree = getDivisibleByThree()


// 3. Every 2nd Letter
// Return every other letter starting at index 1
function everySecondLetter(arr) {
  let result = [];
  for (let i = 1; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
  // Example input: ['a', 'b', 'c', 'd', 'e']
}

const lettersStuff = everySecondLetter(letters);
//logger(lettersStuff);

// 4. Wrap Around Access
// Return item at wrapped index
function getWrapped(arr, index) {
  const wrappedIndex = ((index % arr.length) + arr.length) % arr.length;
  return arr[wrappedIndex];
}

const wrapped = getWrapped(letters, 12);
//logger(wrapped);
// 5. Is Step a Downbeat?
// Return true if the step is a downbeat (every 4th step)
function isDownbeat(step) {
  for (let i = 0; i < step; i++) {
    const downbeat = i + 4;
    if (step === downbeat) {
      return true
    } else {
      return false;
    }
  }
  // ACTUAL ANSWER: return step % 4 === 0;
}
const steps = isDownbeat(5);
//logger(steps);

// 6. Label Every 3rd Item
// Replace every 3rd item in the array with '⚡'
function labelEveryThird(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 2) {
      arr[i] = '⚡';
    }
  }
  const newArray = arr.map((item, index) => {
    if (index % 3 === 2) {
      return item = '⚡';
    }
    return item;
  })
  return newArray;
  // ['a','b','c','d','e','f','g','h','i','j'] => ['a','b','⚡','d','e','⚡',...]
}

// 7. Sum Even Positions
// Return sum of numbers at even indices
function sumEvenIndices(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      sum += arr[i]
    }
  }
  return sum;
  // Example input: [10, 20, 30, 40, 50] => 90
}

const evens = sumEvenIndices([10, 20, 30, 40, 50]);
//logger(evens);

// 8. Loop Modulo Pattern
// Log i % 3 for i from 0 to 9
function logModuloPattern() {
  for (let i = 0; i <= 9; i++) {
    console.log(i % 3);
  }
  // Expected output: 0 1 2 0 1 2 0 1 2 0
}  
const theOnesAndTwos = logModuloPattern();
//logger(theOnesAndTwos);


// 1. Wrap a Step Index
// Return a safe index from 0 to totalSteps - 1
function getWrappedStep(index, totalSteps) {
  const wrappedIndex = ((index % totalSteps) + totalSteps) % totalSteps;
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return array[wrappedIndex];
  // Example: getWrappedStep(-1, 16) => 15
}

const checkWrapped = getWrappedStep(-1, 16);
logger(checkWrapped);

// 2. Get Beat from Circular Pattern
// Return the element at any index (even if it's out of bounds or negative)
function getBeatAtIndex(pattern, index) {
  // pattern = ['kick', 'snare', 'kick', 'hat']
  // Example: getBeatAtIndex(pattern, 6) => 'kick'
}

// 3. Create Step Labels
// Return ['Step 0', 'Step 1', ..., 'Step N']
function createStepLabels(numSteps) {
  // Example: createStepLabels(8) => ['Step 0', ..., 'Step 7']
}

// 4. Loop Playback Display
// Loop N times through an array of notes and print the current note
function playNotes(notes, totalPlays) {
  // notes = ['C', 'D', 'E', 'F']
  // Example output: 'Now playing: C', 'Now playing: D'...
}

// 5. Play Every 3rd Step
// Return an array of step indices to trigger every 3 steps
function getEveryThirdStep(totalSteps) {
  // Example: getEveryThirdStep(16) => [0, 3, 6, 9, 12, 15]
}

// 6. Last Step to First Step Logic
// Return true if advancing from current step wraps to 0
function willWrapNext(currentStep, totalSteps) {
  // Example: willWrapNext(15, 16) => true
}

// 7. Track Step Timing
// Return the correct time using index modulo
function getStepTime(stepTimes, index) {
  // Example: getStepTime([0, 500, 1000, 1500], 5) => 500
}

// 8. Circular Volume Levels
// Get the volume level for a given step
function getVolumeAtStep(step, volumeLevels) {
  // volumeLevels = [0.2, 0.4, 0.6, 0.8, 1.0]
}

// 9. Gate Toggle Every N Steps
// Return 'ON' or 'OFF' based on step number
function getGateState(step, toggleInterval = 4) {
  // Example: getGateState(8) => 'ON', getGateState(9) => 'OFF'
}

// 10. Reverse Step Index
// Return the mirrored index from the end of the array
function getMirroredIndex(index, arrayLength) {
  // Example: getMirroredIndex(0, 8) => 7
}  