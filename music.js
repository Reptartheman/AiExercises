export const jazzMusicians = [
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


export const tracks = [
  {
    id: 1,
    title: "Epic Anthem",
    genre: "Electronic",
    tempo: 128,
    collaborators: ["Alice", "Bob"],
    effects: ["reverb", "delay"],
    hasVocals: true,
    isComplete: true,
    duration: 210, // seconds
    releaseDate: new Date('2022-06-15')
  },
  {
    id: 2,
    title: "Smooth Jazz Jam",
    genre: "Jazz",
    tempo: 90,
    collaborators: ["Carlos"],
    effects: [],
    hasVocals: false,
    isComplete: false,
    duration: 300,
    releaseDate: new Date('2023-01-25')
  },
  {
    id: 3,
    title: "Sunny Day",
    genre: "Jazz",
    tempo: 129,
    collaborators: ["Jimmy", "Jerry"],
    effects: [],
    hasVocals: true,
    isComplete: true,
    duration: 256,
    releaseDate: new Date('2021-05-25')
  },
  {
    id: 4,
    title: "Happy Hour",
    genre: "Jazz",
    tempo: 88,
    collaborators: ["Jimmy", "Jerry"],
    effects: ['compression', 'reverb', 'delay'],
    hasVocals: true,
    isComplete: true,
    duration: 120,
    releaseDate: new Date('2022-07-20')
  },
  {
    id: 5,
    title: "Shit time",
    genre: "Rock and Roll",
    tempo: 75,
    collaborators: ["Jimmy", "Jerry"],
    effects: ['compression', 'reverb', 'delay'],
    hasVocals: true,
    isComplete: true,
    duration: 2000,
    releaseDate: new Date('1988-09-23')
  },
  {
    id: 6,
    title: "Damnit",
    genre: "Alternative Rock",
    tempo: 130,
    collaborators: ["Not Radiohead", "Kimberly"],
    effects: ['compression', 'reverb', 'delay', 'EQ'],
    hasVocals: false,
    isComplete: true,
    duration: 400,
    releaseDate: new Date('1975-01-01')
  },
  {
    id: 7,
    title: "I'm Sorry",
    genre: "Heavy Metal",
    tempo: 126,
    collaborators: ["Skullz", "Meatheadz"],
    effects: ['compression'],
    hasVocals: true,
    isComplete: false,
    duration: 230,
    releaseDate: new Date('1983-02-09')
  },
  {
    id: 8,
    title: "Cheese!",
    genre: "Clesmer",
    tempo: 200,
    collaborators: ["Amish People", "Brooklyn"],
    effects: [],
    hasVocals: false,
    isComplete: false,
    duration: 2230,
    releaseDate: new Date('1967-04-11')
  },
  {
    id: 9,
    title: "Ambitions",
    genre: "EDM",
    tempo: 180,
    collaborators: ["The House", "gardens"],
    effects: ['EQ', 'reverb'],
    hasVocals: true,
    isComplete: true,
    duration: 180,
    releaseDate: new Date('1999-06-10')
  } 
];

export const scales = {
  majorScales: [
    {
      name: 'C-Major',
      hasSharpsOrFlats: false,
      numberOfSharpsOrFlats: 0,
      accidentalNoteNames: null,
      relativeMinor: 'a-minor',
      notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
      intervalsFromRoot: ['maj2nd', 'maj3rd', 'P4th', 'P5th', 'maj6th', 'maj7th', 'P8va'],
      chords: {
        oneChord: 'C-major',
        twoChord: 'D-minor',
        threeChord: 'E-minor',
        fourChord: 'F-major',
        fiveChord: 'G-major',
        sixChord: 'A-minor',
        sevenChord: 'B-diminished'
      }
    },
    {
      name: 'F-Major',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 1,
      accidentalNoteNames: ['B-flat'],
      relativeMinor: 'd-minor',
      notes: ['F', 'G', 'A', 'B-flat', 'C', 'D', 'E', 'F'],
      intervalsFromRoot: ['maj2nd', 'maj3rd', 'P4th', 'P5th', 'maj6th', 'maj7th', 'P8va'],
      chords: {
        oneChord: 'F-major',
        twoChord: 'G-minor',
        threeChord: 'A-minor',
        fourChord: 'B-flat-Major',
        fiveChord: 'C-Major',
        sixChord: 'A-minor',
        sevenChord: 'E-diminished'
      }
    },
    {
      name: 'B-flat-Major',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 2,
      accidentalNoteNames: ['B-flat', 'E-flat'],
      relativeMinor: 'g-minor',
      notes: ['B-flat','C', 'D', 'E-flat', 'F', 'G', 'A', 'B-flat'],
      intervalsFromRoot: ['maj2nd', 'maj3rd', 'P4th', 'P5th', 'maj6th', 'maj7th', 'P8va'],
      chords: {
        oneChord: 'B-flat-major',
        twoChord: 'C-minor',
        threeChord: 'D-minor',
        fourChord: 'E-flat-major',
        fiveChord: 'F-major',
        sixChord: 'D-minor',
        sevenChord: 'A-diminished'
      }
    },
    {
      name: 'E-flat-major',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 3,
      accidentalNoteNames: ['B-flat', 'E-flat', 'A-flat'],
      relativeMinor: 'c-minor',
      notes: ['E-flat', 'F', 'G', 'A-flat', 'B-flat', 'C', 'D', 'E-flat'],
      intervalsFromRoot: ['maj2nd', 'maj3rd', 'P4th', 'P5th', 'maj6th', 'maj7th', 'P8va'],
      chords: {
        oneChord: 'E-flat-major',
        twoChord: 'F-minor',
        threeChord: 'G-minor',
        fourChord: 'A-flat-major',
        fiveChord: 'B-flat-major',
        sixChord: 'C-minor',
        sevenChord: 'D-diminished'
      }
    },
    {
      name: 'A-flat-major',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 4,
      accidentalNoteNames: ['B-flat', 'E-flat', 'A-flat', 'D-flat'],
      relativeMinor: 'f-minor',
      notes: ['A-flat', 'B-flat', 'C', 'D-flat', 'E-flat', 'F', 'G', 'A-flat'],
      intervalsFromRoot: ['maj2nd', 'maj3rd', 'P4th', 'P5th', 'maj6th', 'maj7th', 'P8va'],
      chords: {
        oneChord: 'A-flat-major',
        twoChord: 'B-flat-minor',
        threeChord: 'C-minor',
        fourChord: 'D-flat-major',
        fiveChord: 'E-flat-major',
        sixChord: 'F-minor',
        sevenChord: 'G-diminished'
      }
    },
    {
      name: 'D-flat-major',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 5,
      accidentalNoteNames: ['B-flat', 'E-flat', 'A-flat', 'D-flat', 'G-flat'],
      relativeMinor: 'b-flat-minor',
      notes: ['D-flat', 'E-flat', 'F', 'G-flat', 'A-flat', 'B-flat', 'C', 'D-flat'],
      intervalsFromRoot: ['maj2nd', 'maj3rd', 'P4th', 'P5th', 'maj6th', 'maj7th', 'P8va'],
      chords: {
        oneChord: 'D-flat-major',
        twoChord: 'E-flat-minor',
        threeChord: 'F-minor',
        fourChord: 'G-flat-major',
        fiveChord: 'A-flat-major',
        sixChord: 'B-flat-minor',
        sevenChord: 'C-diminished'
      }
    },
    {
      name: 'G-flat-major',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 6,
      accidentalNoteNames: ['B-flat', 'E-flat', 'A-flat', 'D-flat', 'G-flat', 'C-flat'],
      relativeMinor: 'e-flat-minor',
      notes: ['G-flat', 'A-flat', 'B-flat', 'C-flat', 'D-flat', 'E-flat', 'F', 'G-flat'],
      intervalsFromRoot: ['maj2nd', 'maj3rd', 'P4th', 'P5th', 'maj6th', 'maj7th', 'P8va'],
      chords: {
        oneChord: 'G-flat-major',
        twoChord: 'A-flat-minor',
        threeChord: 'B-flat-minor',
        fourChord: 'C-flat-major',
        fiveChord: 'D-flat-major',
        sixChord: 'E-flat-major',
        sevenChord: 'F-diminished'
      }
    },
    {
      name: 'C-flat-major',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 7,
      accidentalNoteNames: ['B-flat', 'E-flat', 'A-flat', 'D-flat', 'G-flat', 'C-flat', 'F-flat'],
      relativeMinor: 'a-flat-minor',
      notes: ['C-flat', 'D-flat', 'E-flat', 'F-flat', 'G-flat', 'A-flat', 'B-flat', 'C-flat'],
      intervalsFromRoot: ['maj2nd', 'maj3rd', 'P4th', 'P5th', 'maj6th', 'maj7th', 'P8va'],
      chords: {
        oneChord: 'C-flat-major',
        twoChord: 'D-flat-minor',
        threeChord: 'E-flat-minor',
        fourChord: 'F-flat-major',
        fiveChord: 'G-flat-major',
        sixChord: 'A-flat-major',
        sevenChord: 'B-flat-diminished'
      }
    },
    {
      name: 'B-major',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 5,
      accidentalNoteNames: ['C-sharp','D-sharp', 'F-sharp', 'G-sharp', 'A-sharp'],
      relativeMinor: 'g-sharp-minor',
      notes: ['B', 'C-sharp', 'D-sharp', 'E', 'F-sharp', 'G-sharp', 'A-sharp', 'B'],
      intervalsFromRoot: ['maj2nd', 'maj3rd', 'P4th', 'P5th', 'maj6th', 'maj7th', 'P8va'],
      chords: {
        oneChord: 'B-major',
        twoChord: 'C-sharp-minor',
        threeChord: 'D-sharp-minor',
        fourChord: 'E-major',
        fiveChord: 'F-sharp-major',
        sixChord: 'G-sharp-minor',
        sevenChord: 'A-sharp-diminished'
      }
    },
    {
      name: 'E-major',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 4,
      accidentalNoteNames: ['F-sharp', 'G-sharp', 'C-sharp', 'D-sharp'],
      relativeMinor: 'c-sharp-minor',
      notes: ['E', 'F-sharp', 'G-sharp', 'A', 'B', 'C-sharp', 'D-sharp', 'E'],
      intervalsFromRoot: ['maj2nd', 'maj3rd', 'P4th', 'P5th', 'maj6th', 'maj7th', 'P8va'],
      chords: {
        oneChord: 'E-major',
        twoChord: 'F-sharp-minor',
        threeChord: 'G-sharp-minor',
        fourChord: 'A-major',
        fiveChord: 'B-major',
        sixChord: 'C-sharp-minor',
        sevenChord: 'D-sharp-diminished'
      }
    },
    {
      name: 'A-major',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 3,
      accidentalNoteNames: ['G-sharp', 'C-sharp', 'F-sharp'],
      relativeMinor: 'e-sharp-minor',
      notes: ['A', 'B', 'C-sharp', 'D', 'E', 'F-sharp', 'G-sharp', 'A'],
      intervalsFromRoot: ['maj2nd', 'maj3rd', 'P4th', 'P5th', 'maj6th', 'maj7th', 'P8va'],
      chords: {
        oneChord: 'A-major',
        twoChord: 'B-minor',
        threeChord: 'C-sharp-minor',
        fourChord: 'D-sharp-major',
        fiveChord: 'E-major',
        sixChord: 'F-sharp-minor',
        sevenChord: 'G-sharp-diminished'
      }
    },
    {
      name: 'D-major',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 2,
      accidentalNoteNames: ['F-sharp','C-sharp'],
      relativeMinor: 'b-minor',
      notes: ['D', 'E', 'F-sharp', 'G', 'A', 'B', 'C-sharp', 'D'],
      intervalsFromRoot: ['maj2nd', 'maj3rd', 'P4th', 'P5th', 'maj6th', 'maj7th', 'P8va'],
      chords: {
        oneChord: 'D-major',
        twoChord: 'E-minor',
        threeChord: 'F-sharp-minor',
        fourChord: 'G-major',
        fiveChord: 'A-major',
        sixChord: 'B-minor',
        sevenChord: 'C-sharp-diminished'
      }
    },
    {
      name: 'G-major',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 1,
      accidentalNoteNames: ['F-sharp'],
      relativeMinor: 'e-minor',
      notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F-sharp', 'G'],
      intervalsFromRoot: ['maj2nd', 'maj3rd', 'P4th', 'P5th', 'maj6th', 'maj7th', 'P8va'],
      chords: {
        oneChord: 'G-major',
        twoChord: 'A-minor',
        threeChord: 'B-minor',
        fourChord: 'C-major',
        fiveChord: 'D-major',
        sixChord: 'E-minor',
        sevenChord: 'F-sharp-diminished'
      }
    },
  ],

  minorScales: [
    {
      name: 'A-minor',
      hasSharpsOrFlats: false,
      numberOfSharpsOrFlats: 0,
      accidentalNoteNames: null,
      relativeMajor: 'C-major',
      notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'],
      intervalsFromRoot: ['maj2nd', 'min2nd', 'P4th', 'P5th', 'min6th', 'min7th', 'P8va'],
      chords: {
        oneChord: 'A-minor',
        twoChord: 'B-diminished',
        threeChord: 'C-major',
        fourChord: 'D-minor',
        fiveChord: 'E-minor',
        sixChord: 'F-major',
        sevenChord: 'G-major'
      }
    },
    {
      name: 'D-minor',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 1,
      accidentalNoteNames: 'B-flat',
      relativeMajor: 'F-major',
      notes: ['D', 'E', 'F', 'G', 'A', 'B-flat', 'C', 'D'],
      intervalsFromRoot: ['maj2nd', 'min2nd', 'P4th', 'P5th', 'min6th', 'min7th', 'P8va'],
      chords: {
        oneChord: 'D-minor',
        twoChord: 'E-diminished',
        threeChord: 'F-major',
        fourChord: 'G-minor',
        fiveChord: 'A-minor',
        sixChord: 'B-flat-major',
        sevenChord: 'C-major'
      }
    },
    {
      name: 'G-minor',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 2,
      accidentalNoteNames: ['B-flat', 'E-flat'],
      relativeMajor: 'B-flat-major',
      notes: ['G', 'A', 'B-flat', 'C', 'D', 'E-flat', 'F', 'G'],
      intervalsFromRoot: ['maj2nd', 'min2nd', 'P4th', 'P5th', 'min6th', 'min7th', 'P8va'],
      chords: {
        oneChord: 'G-minor',
        twoChord: 'A-diminished',
        threeChord: 'B-flat-major',
        fourChord: 'C-minor',
        fiveChord: 'D-minor',
        sixChord: 'E-flat-major',
        sevenChord: 'F-major'
      }
    },
    {
      name: 'C-minor',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 3,
      accidentalNoteNames: ['B-flat', 'E-flat', 'A-flat'],
      relativeMajor: 'E-flat-major',
      notes: ['C', 'D', 'E-flat', 'F', 'G', 'A-flat', 'B-flat', 'C'],
      intervalsFromRoot: ['maj2nd', 'min2nd', 'P4th', 'P5th', 'min6th', 'min7th', 'P8va'],
      chords: {
        oneChord: 'C-minor',
        twoChord: 'D-diminished',
        threeChord: 'E-flat-major',
        fourChord: 'F-minor',
        fiveChord: 'G-minor',
        sixChord: 'A-flat-major',
        sevenChord: 'B-flat-major'
      }
    },
    {
      name: 'F-minor',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 4,
      accidentalNoteNames: ['B-flat', 'E-flat', 'A-flat', 'D-flat'],
      relativeMajor: 'A-flat-major',
      notes: ['F', 'G', 'A-flat', 'B-flat', 'C', 'D-flat', 'E-flat', 'F'],
      intervalsFromRoot: ['maj2nd', 'min2nd', 'P4th', 'P5th', 'min6th', 'min7th', 'P8va'],
      chords: {
        oneChord: 'F-minor',
        twoChord: 'G-diminished',
        threeChord: 'A-flat-major',
        fourChord: 'B-flat-minor',
        fiveChord: 'C-minor',
        sixChord: 'D-flat-major',
        sevenChord: 'E-flat-major'
      }
    },
    {
      name: 'B-flat-minor',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 5,
      accidentalNoteNames: ['B-flat', 'E-flat', 'A-flat', 'D-flat', 'G-flat'],
      relativeMajor: 'D-flat-major',
      notes: ['B-flat', 'C', 'D-flat', 'E-flat', 'F', 'G-flat', 'A-flat', 'B-flat'],
      intervalsFromRoot: ['maj2nd', 'min2nd', 'P4th', 'P5th', 'min6th', 'min7th', 'P8va'],
      chords: {
        oneChord: 'B-flat-minor',
        twoChord: 'C-diminished',
        threeChord: 'D-flat-major',
        fourChord: 'E-flat-minor',
        fiveChord: 'F-minor',
        sixChord: 'G-flat-major',
        sevenChord: 'A-flat-major'
      }
    },
    {
      name: 'E-flat-minor',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 6,
      accidentalNoteNames: ['B-flat', 'E-flat', 'A-flat', 'D-flat', 'G-flat', 'C-flat'],
      relativeMajor: 'G-flat-major',
      notes: ['E-flat', 'F', 'G-flat', 'A-flat', 'B-flat', 'C-flat', 'D-flat', 'E-flat'],
      intervalsFromRoot: ['maj2nd', 'min2nd', 'P4th', 'P5th', 'min6th', 'min7th', 'P8va'],
      chords: {
        oneChord: 'E-flat-minor',
        twoChord: 'F-diminished',
        threeChord: 'G-flat-major',
        fourChord: 'A-flat-minor',
        fiveChord: 'B-flat-minor',
        sixChord: 'C-flat-major',
        sevenChord: 'D-flat-major'
      }
    },
    {
      name: 'A-flat-minor',
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 7,
      accidentalNoteNames: ['B-flat', 'E-flat', 'A-flat', 'D-flat', 'G-flat', 'C-flat', 'F-flat'],
      relativeMajor: 'C-flat-major',
      notes: ['A-flat', 'B-flat', 'C-flat', 'D-flat', 'E-flat', 'F-flat', 'G-flat', 'A-flat'],
      intervalsFromRoot: ['maj2nd', 'min2nd', 'P4th', 'P5th', 'min6th', 'min7th', 'P8va'],
      chords: {
        oneChord: 'A-flat-minor',
        twoChord: 'B-flat-diminished',
        threeChord: 'C-flat-major',
        fourChord: 'D-flat-minor',
        fiveChord: 'E-flat-minor',
        sixChord: 'F-flat-major',
        sevenChord: 'G-flat-major'
      }
    },
  ]         
}