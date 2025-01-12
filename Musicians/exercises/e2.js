import { jazzMusicians } from '../musicians.js'

//Find the musician born closest to 1950 Write a function that finds and returns the musician whose birth date is closest to the year 1950.
export const musicianBornClosestTo1950 = (array) => {
  return array.reduce((closest, currentMusician) => {
    
    const closestYear = new Date(closest.born).getFullYear();
    const currentYear = new Date(currentMusician.born).getFullYear();

    const closestDiff = Math.abs(closestYear - 1950);
    const currentDiff = Math.abs(currentYear - 1950);
    return currentDiff < closestDiff ? currentMusician : closest;
  });
}

musicianBornClosestTo1950(jazzMusicians);