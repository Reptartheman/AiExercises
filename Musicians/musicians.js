const jazzMusicians = [
  {
    name: 'Louis Armstrong',
    instrument: 'Trumpet',
    born: '1901-08-04',
    famousWorks: ['What a Wonderful World', 'La Vie En Rose'],
    nationality: 'American'
  },
  {
    name: 'Miles Davis',
    instrument: 'Trumpet',
    born: '1926-05-26',
    famousWorks: ['Kind of Blue', 'Bitches Brew'],
    nationality: 'American'
  },
  {
    name: 'John Coltrane',
    instrument: 'Saxophone',
    born: '1926-09-23',
    famousWorks: ['A Love Supreme', 'Giant Steps'],
    nationality: 'American'
  },
  {
    name: 'Duke Ellington',
    instrument: 'Piano',
    born: '1899-04-29',
    famousWorks: ['It Don\'t Mean a Thing (If It Ain\'t Got That Swing)', 'Mood Indigo'],
    nationality: 'American'
  },
  {
    name: 'Charlie Parker',
    instrument: 'Saxophone',
    born: '1920-08-29',
    famousWorks: ['Ornithology', 'Now\'s the Time'],
    nationality: 'American'
  },
  {
    name: 'Billie Holiday',
    instrument: 'Vocals',
    born: '1915-04-07',
    famousWorks: ['Strange Fruit', 'God Bless the Child'],
    nationality: 'American'
  },
  {
    name: 'Thelonious Monk',
    instrument: 'Piano',
    born: '1917-10-10',
    famousWorks: ['Round Midnight', 'Straight, No Chaser'],
    nationality: 'American'
  },
  {
    name: 'Ella Fitzgerald',
    instrument: 'Vocals',
    born: '1917-04-25',
    famousWorks: ['Summertime', 'Dream a Little Dream of Me'],
    nationality: 'American'
  },
  {
    name: 'Dizzy Gillespie',
    instrument: 'Trumpet',
    born: '1917-10-21',
    famousWorks: ['A Night in Tunisia', 'Salt Peanuts'],
    nationality: 'American'
  },
  {
    name: 'Herbie Hancock',
    instrument: 'Piano',
    born: '1940-04-12',
    famousWorks: ['Cantaloupe Island', 'Chameleon'],
    nationality: 'American'
  }
];
//Print the names of all jazz musicians.
const allMusicians = (array) => {
  return array.forEach(musician => console.log(musician.name));
}
//allMusicians(jazzMusicians);

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