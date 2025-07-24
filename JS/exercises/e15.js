/*
---
Exercise 15: Tracks Grouped by Effects
---
*/

/*
Write a function that returns an object 
where each key is an audio effect (e.g., "reverb", "delay") 
and the value is an array of simplified track objects 
that used that effect.

Each track object in the array should contain:
- trackTitle (from the track's title)
- usesVocals (from the track's hasVocals boolean)
*/

import { tracks } from '../../music.js';

function groupTracksByEffects(tracks) {
  return tracks.reduce((acc, track) => {
    const { title, effects, hasVocals } = track;
    for (const effect of effects) {
      if (!acc[effect]) {
        acc[effect] = [];
      }
      acc[effect].push({ trackTitle: title, usesVocals: hasVocals} )
    }
    return acc;
  }, {})
  
}




const grouped = groupTracksByEffects(tracks);
console.log(grouped);



/* 
  const words = ['hi', 'there'];
const wordLengths = words.reduce((acc, word) => {
  acc[word] = word.length;
  return acc;
}, {});





  {
  "reverb": [
    { trackTitle: "Epic Anthem", usesVocals: true },
    { trackTitle: "Happy Hour", usesVocals: true },
    { trackTitle: "Shit time", usesVocals: true },
    { trackTitle: "Damnit", usesVocals: false },
    { trackTitle: "Ambitions", usesVocals: true }
  ],
  "delay": [
    { trackTitle: "Epic Anthem", usesVocals: true },
    { trackTitle: "Happy Hour", usesVocals: true },
    { trackTitle: "Shit time", usesVocals: true },
    { trackTitle: "Damnit", usesVocals: false }
  ],
  "compression": [
    { trackTitle: "Happy Hour", usesVocals: true },
    { trackTitle: "Shit time", usesVocals: true },
    { trackTitle: "I'm Sorry", usesVocals: true }
  ],
  "EQ": [
    { trackTitle: "Damnit", usesVocals: false },
    { trackTitle: "Ambitions", usesVocals: true }
  ]
}
*/
