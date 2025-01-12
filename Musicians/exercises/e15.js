import { jazzMusicians } from '../musicians.js';

export const countMusiciansByDecade = (arr) => {
  const birthDates = arr.map(musician => musician.born);
  const years = birthDates.map(date => {
    const year = new Date(date);
    return year.getFullYear();
  })
  return years.reduce((obj, year) => {
    const decade = Math.floor(year / 10) * 10;
    const decadeString = decade.toString() + 's';
    if(!obj[decadeString]) {
      obj[decadeString] = 1
    } else {
      obj[decadeString]++
    }
    console.log(`Year: ${year}, Decade: ${decadeString}`);

    return obj;
    
  }, {});
}

countMusiciansByDecade(jazzMusicians);