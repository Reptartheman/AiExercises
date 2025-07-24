/* 
Exercise 3: Get Collaborators for Unfinished Tracks
Write a function that filters the tracks array for 
tracks that are not complete (isComplete: false) 
and returns an array of unique collaborators across all such tracks.
*/


import { tracks } from '../../music.js';


function getCollaboratorsForUnfinishedTracks(tracks) {
  return tracks.filter(track => !track.isComplete)
    .flatMap(track => track.collaborators);
}


const collabs = getCollaboratorsForUnfinishedTracks(tracks);

console.log(collabs);

/* 
Expected output

["Carlos", "Skullz", "Meatheadz", "Amish People", "Brooklyn"]
*/
