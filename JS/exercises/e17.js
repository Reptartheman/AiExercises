/* 
Exercise 17: Average Tempo by Genre
Return an object where each key is a genre, 
and the value is the average tempo of tracks in that genre.
*/

import { tracks } from '../../music.js';

function averageTempoByGenre(tracks) {
  const genreData = {};
  let sum = 0;
  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    const genre = track.genre;
    const tempo = track.tempo;

    if (!genreData[genre]) {
  genreData[genre] = { totalTempo: 0, count: 0 };
}

genreData[genre].totalTempo += tempo;
genreData[genre].count += 1;
  }
  const averages = {};


for (let genre in genreData) {
  const { totalTempo, count } = genreData[genre];
  const avg = totalTempo / count;
  averages[genre] = parseFloat(avg.toFixed(2));
}

  return averages;

  // calculate averages and return final object
}


console.log(averageTempoByGenre(tracks));

/* 
- Make a genres array
- 

*/