/* 
Exercise 26: Every 3rd Genre Label
Write a function called labelEveryThirdGenre that:

Accepts the tracks array.

Returns a new array of the same length.

Replace every 3rd track (i.e. indices 2, 5, 8...) with the string '🎵 GENRE: <genre>'

Leave other elements as their original .title string.

[
  "Epic Anthem",
  "Smooth Jazz Jam",
  "🎵 GENRE: Jazz",
  "Happy Hour",
  "Shit time",
  "🎵 GENRE: Rock and Roll",
  "I'm Sorry",
  "Cheese!",
  "🎵 GENRE: EDM"
]




*/

import { tracks, logger } from "../../music.js"

const testTracks = [
  { title: "A", genre: "Pop" },
  { title: "B", genre: "Jazz" },
  { title: "C", genre: "Funk" },
  { title: "D", genre: "Rock" },
  { title: "E", genre: "Classical" },
  { title: "F", genre: "Soul" },
  { title: "G", genre: "Hip Hop" },
  { title: "H", genre: "EDM" },
  { title: "I", genre: "Blues" },
];

/* const labelEveryThirdGenre = (tracks) => {
  let result = [];
  for (let i = 0; i < tracks.length; i++) {
    if (i % 3 === 2) {
      result.push(tracks[i] = `🎵 GENRE: ${tracks[i].genre}`)
    } else {
      result.push(tracks[i] = tracks[i].title)
    }
  }

  return result;
} */

const labelEveryThirdGenreMapped = (tracks) => {
  return tracks.map((track, index) => index % 3 === 2 ? `🎵 GENRE: ${track.genre}` : track.title);
}

//const result = labelEveryThirdGenre(tracks);
const result2 = labelEveryThirdGenreMapped(tracks);

//logger(result);
logger(result2);