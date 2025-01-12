import { tracks } from "../tracks.js";

export const getAllTrackTitles = (array) => {
  const track = array.map(track => track.title);
  return track;
}

getAllTrackTitles(tracks);