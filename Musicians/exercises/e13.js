import { jazzMusicians } from "../musicians";

export const findFirstMusicianByWord = (arr, word) => {
  return arr.find(musician => 
    musician.famousWorks.some(work => work.includes(word))) ;
};

findFirstMusicianByWord(jazzMusicians, 'Love');