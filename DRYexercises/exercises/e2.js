import { tracks } from '../../tracks.js';
/* function countGenres(tracks) {
  const genreCounts = {};
  for (let track of tracks) {
    if (!genreCounts[track.genre]) {
      genreCounts[track.genre] = 1;
    } else {
      genreCounts[track.genre]++;
    }
  }
  return genreCounts;
} */
  export function countGenres(tracks) {
    return tracks.reduce((acc, track) => {
      acc[track.genre] = (acc[track.genre] || 0) + 1;
      return acc;
    }, {});
  }
  