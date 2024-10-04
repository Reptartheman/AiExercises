import { jazzMusicians } from "../musicians";

export const getMusiciansBornOnDay = (array, day) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const findMusician = array.filter((musician) => {
    const [year, month, date] = musician.born.split('-');  // Manually extract year, month, day
    const bornDay = new Date(Date.UTC(year, month - 1, date)).getUTCDay();  // Create date in UTC and get the day
    
    console.log(musician.name, 'Born:', `${year}-${month}-${date}`, 'Day:', days[bornDay]);  // Detailed log

    return days[bornDay].toLowerCase() === day.toLowerCase();  // Case-insensitive comparison
  });

  return findMusician;
};








getMusiciansBornOnDay(jazzMusicians, 'sunday');
