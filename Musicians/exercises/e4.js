import { jazzMusicians } from "../musicians";

//Group musicians by instrument.

export const groupByInstrument = (array) => {
  const groupedMusicians = array.reduce((acc, musician) => {
    if (!acc[musician.instrument]) {
      acc[musician.instrument] = [];
    }
    acc[musician.instrument].push(musician);

    return acc; 
  }, {})
  return groupedMusicians;
}

groupByInstrument(jazzMusicians);