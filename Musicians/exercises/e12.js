import { jazzMusicians } from "../musicians";

export const getMusiciansBornBetween = (arr, startDate, endDate) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();

  // Check if either date is invalid
  if (isNaN(start) || isNaN(end)) {
    return undefined;
  }

  // Filter musicians born between the start and end date
  return arr.filter(musician => {
    const birthDate = new Date(musician.born).getTime();
    return birthDate >= start && birthDate <= end;
  });
};

getMusiciansBornBetween(jazzMusicians, '1915-01-01', '1925-12-31');


