import { tracks } from "../tracks";

export const getTracksByGenre = (array, genre) => {
  const filteredTracks = array.filter(track => track.genre === genre);
  return filteredTracks.map(track => track.title);
}

getTracksByGenre(tracks, "Jazz");