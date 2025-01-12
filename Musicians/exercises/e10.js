import { jazzMusicians } from '../musicians.js';

export const findMusicianWithShortestWork = (arr) => {
  return arr.reduce((acc, musician) => {
    // Find the shortest work for the current musician
    const shortestWorkForMusician = musician.famousWorks.reduce((shortest, work) => {
      return work.length < shortest.length ? work : shortest;
    }, musician.famousWorks[0]);

    // If the current musician's shortest work is shorter than the accumulator's work, update the accumulator
    return shortestWorkForMusician.length < acc.shortestWork.length
      ? { musician: musician, shortestWork: shortestWorkForMusician }  // Store both musician and shortestWork
      : acc;
  }, {
    musician: arr[0], 
    shortestWork: arr[0].famousWorks[0]  // Initial shortest work setup
  }).musician;  // Return the musician only
};



findMusicianWithShortestWork(jazzMusicians);