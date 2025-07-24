/* 
Exercise 8: Filter Tracks by Effect
Write a function that filters the tracks array, returning only the tracks that use a specified audio effect.
*/

import { tracks } from '../../music.js';

function filterTracksByEffect(tracks, effect) {
  return tracks.filter(track => track.effects.some((eff) => eff === effect ));
}

console.log(filterTracksByEffect(tracks, "delay"));
