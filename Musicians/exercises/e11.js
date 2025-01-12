import { jazzMusicians } from "../musicians";

export const getUniqueInstruments = (arr) => {
  const instruments = arr.map(musician => musician.instrument);
  return [...new Set(instruments)];
}

getUniqueInstruments(jazzMusicians);