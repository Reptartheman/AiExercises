


const logNamesAndInstruments = (array) => {
  const before1920 = array.filter(musician => {
    const birthYear = new Date(musician.born).getFullYear();
    return birthYear < 1920
  });

  before1920.forEach(musician => {
    console.log(`Name: ${musician.name}, Instrument: ${musician.instrument}`)
  });
}
//logNamesAndInstruments(jazzMusicians);

function famousWorksOfTrumpeters(array) {
  return array.filter(musician => {
    if(musician.instrument === 'Trumpet') {
      console.log(musician.famousWorks);
    }
  })
}
//famousWorksOfTrumpeters(jazzMusicians);

//Create a list of musicians born in the 1920s.
function bornInThe1920s(array) {
  const bornInThe1920s = array.filter(musician => {
    const birthYear = new Date(musician.born).getFullYear();
    return birthYear >= 1920 && birthYear < 1940
  });

  console.log(bornInThe1920s);
}

//bornInThe1920s(jazzMusicians);

//Create an array of names of musicians who are vocalists.
function giveMeVocalists(array) {
  const vocalists = array.filter(musician => musician.instrument === 'Vocals');
  console.log(vocalists);
}

//giveMeVocalists(jazzMusicians);

//Count how many musicians play the piano.

function countPianists(array) {
  const pianists = array.filter(musician => musician.instrument === 'Piano');
  console.log(pianists.length);
}

//countPianists(jazzMusicians);

//Find the musician with the earliest birth date.

function earliestBirthDate(array) {
  
}



//Find the total number of famous works across all musicians.
function totalFamousWorks(array) {
  const works = array.flatMap(musician => musician.famousWorks);
  console.log(works.length);
}
totalFamousWorks(jazzMusicians);