function getMusiciansByDecade(musicians, decade) {
  const results = [];
  for (let musician of musicians) {
    const birthYear = new Date(musician.born).getFullYear();
    if (birthYear >= decade && birthYear < decade + 10) {
      results.push(musician.name);
    }
  }
  return results;
}



