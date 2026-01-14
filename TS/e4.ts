/* Exercise 4: Get All Famous Works by Instrument
Task: Create a TypeScript interface based on the jazzMusicians data from music.js.
Write a function that takes an instrument name and returns all famous works 
by musicians who play that instrument as a flat array. */

interface Musician {
  name: string;
  instrument: string;
  born: string;
  famousWorks: string[];
  nationality: string;
}

interface FamousWorkResult {
  work: string;
  artist: string;
}

const jazzMusicians: Musician[] = [
  {
    name: "Louis Armstrong",
    instrument: "Trumpet",
    born: "1901-08-04",
    famousWorks: ["What a Wonderful World", "La Vie En Rose"],
    nationality: "American",
  },
  {
    name: "Miles Davis",
    instrument: "Trumpet",
    born: "1926-05-26",
    famousWorks: ["Kind of Blue", "Bitches Brew"],
    nationality: "American",
  },
  {
    name: "John Coltrane",
    instrument: "Saxophone",
    born: "1926-09-23",
    famousWorks: ["A Love Supreme", "Giant Steps"],
    nationality: "American",
  },
  {
    name: "Duke Ellington",
    instrument: "Piano",
    born: "1899-04-29",
    famousWorks: ["It Don't Mean a Thing (If It Ain't Got That Swing)", "Mood Indigo"],
    nationality: "American",
  },
  {
    name: "Charlie Parker",
    instrument: "Saxophone",
    born: "1920-08-29",
    famousWorks: ["Ornithology", "Now's the Time"],
    nationality: "American",
  },
  {
    name: "Billie Holiday",
    instrument: "Vocals",
    born: "1915-04-07",
    famousWorks: ["Strange Fruit", "God Bless the Child"],
    nationality: "American",
  },
  {
    name: "Thelonious Monk",
    instrument: "Piano",
    born: "1917-10-10",
    famousWorks: ["Round Midnight", "Straight, No Chaser"],
    nationality: "American",
  },
  {
    name: "Ella Fitzgerald",
    instrument: "Vocals",
    born: "1917-04-25",
    famousWorks: ["Summertime", "Dream a Little Dream of Me"],
    nationality: "American",
  },
  {
    name: "Dizzy Gillespie",
    instrument: "Trumpet",
    born: "1917-10-21",
    famousWorks: ["A Night in Tunisia", "Salt Peanuts"],
    nationality: "American",
  },
  {
    name: "Herbie Hancock",
    instrument: "Piano",
    born: "1940-04-12",
    famousWorks: ["Cantaloupe Island", "Chameleon"],
    nationality: "American",
  },
];

const getFamousWorksByInstrument = (musicians: Musician[], instrument: string): FamousWorkResult[] => {
  const result: FamousWorkResult[] = [];
  
  musicians
    .filter((musician) => musician.instrument === instrument)
    .forEach((musician) => {
      musician.famousWorks.forEach((work) => {
        result.push({
          work: work,
          artist: musician.name,
        });
      });
    });
  
  return result;
};

console.log(getFamousWorksByInstrument(jazzMusicians, "Piano"));
