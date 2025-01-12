import { jazzMusicians } from "../musicians";

export const getMusiciansByWorkLength = (array, number) => {
   return typeof number === 'number' ? array.filter(musician => musician.famousWorks.length === number) : undefined;
    
}

getMusiciansByWorkLength(jazzMusicians, 2);