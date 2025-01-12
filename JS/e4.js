/* 
  4. Find Collaborators
Task: Write a function that takes a track title and returns the list of collaborators for that track.
Input: tracks array and a title string.
Output: Array of collaborator names.
*/

import { tracks } from "../tracks.js";

const getCollabs = (tracks, title) => {
  return tracks.filter(track => track.title === title)
    .map(track => track.collaborators);
}

console.log(getCollabs(tracks, "Sunny Day"));