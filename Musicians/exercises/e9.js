import { jazzMusicians } from "../musicians";

export const findClosestMusicianByDate = (array, date) => {
  const targetDateToMilliseconds = new Date(date).getTime();

  // Check if the date is valid
  if (isNaN(targetDateToMilliseconds)) {
    return undefined;
  }

  // Reduce to find the closest musician
  return array.reduce((acc, musician) => {
    const musicianDateToMilliseconds = new Date(musician.born).getTime();
    const difference = Math.abs(musicianDateToMilliseconds - targetDateToMilliseconds);

    // If this musician's difference is smaller, update the accumulator
    if (difference < acc.smallestDifference) {
      return {
        closestMusician: musician,           // Update to the new closest musician
        smallestDifference: difference       // Update to the new smallest difference
      };
    }

    // Otherwise, keep the current closest musician
    return acc;
  }, {
    closestMusician: array[0],                // Initial closest musician
    smallestDifference: Math.abs(new Date(array[0].born).getTime() - targetDateToMilliseconds)  // Initial difference
  }).closestMusician;  // Return only the closest musician object
};



findClosestMusicianByDate(jazzMusicians, '1915-01-01');