import { jazzMusicians } from "../musicians";

export const getAverageBirthYear = (array) => {
  if(array.length === 0) {
    return 0;
  }
  const gimmeTheYear = array.map(musician => {
    const musicianYears = new Date(musician.born).getFullYear();
    return musicianYears;
  });
  return gimmeTheYear.reduce((acc, curr) => {
    return acc + curr;
  }, 0) / gimmeTheYear.length;
  
} 


getAverageBirthYear(jazzMusicians);