/* 
Exercise 3: Calculate Total Duration of Complete Tracks
Write a function that calculates the total duration (in seconds) of all tracks marked as complete in the tracks array. */





import { tracks } from '../../music.js'


function calculateTotalDuration(tracks) {
  return tracks.filter(track => track.isComplete)
  .reduce((acc, curr) => {
    return acc + curr.duration;
  }, 0);
}

const total = calculateTotalDuration(tracks);

console.log(total);
