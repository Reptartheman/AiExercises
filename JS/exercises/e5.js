/* 
Exercise 5: List Collaborators for a Genre
Write a function that takes a genre and returns a list of unique collaborators who worked on tracks of that genre.
*/
import { tracks } from '../../music.js';


function listCollaboratorsByGenre(tracks, genre) {
  const results = tracks.filter(track => track.genre === genre)
    .flatMap(track => track.collaborators);
  const unique = [...new Set(results)];
  return unique;

}

const result = listCollaboratorsByGenre(tracks, 'Jazz');

console.log(result);