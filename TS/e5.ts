/* Exercise 5: Calculate Average Tempo by Genre
Task: Create a TypeScript interface based on the tracks data from music.js.
Write a function that takes a genre name and calculates the average tempo 
of all tracks in that genre. Return the average rounded to 2 decimal places. */

interface Track {
  id: number;
  title: string;
  genre: string;
  tempo: number;
  collaborators: string[];
  effects: string[];
  hasVocals: boolean;
  isComplete: boolean;
  duration: number;
  releaseDate: Date;
}

interface GenreStats {
  genre: string;
  averageTempo: number;
  trackCount: number;
}

const tracks: Track[] = [
  {
    id: 1,
    title: "Epic Anthem",
    genre: "EDM",
    tempo: 128,
    collaborators: ["Alice", "Bob"],
    effects: ["reverb", "delay"],
    hasVocals: true,
    isComplete: true,
    duration: 210,
    releaseDate: new Date("2022-06-15"),
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
    releaseDate: new Date("2023-01-25"),
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
    releaseDate: new Date("2021-05-25"),
  },
  {
    id: 4,
    title: "Happy Hour",
    genre: "Jazz",
    tempo: 88,
    collaborators: ["Jimmy", "Jerry"],
    effects: ["compression", "reverb", "delay"],
    hasVocals: true,
    isComplete: true,
    duration: 120,
    releaseDate: new Date("2022-07-20"),
  },
  {
    id: 5,
    title: "Shit time",
    genre: "Rock and Roll",
    tempo: 75,
    collaborators: ["Jimmy", "Jerry"],
    effects: ["compression", "reverb", "delay"],
    hasVocals: true,
    isComplete: true,
    duration: 2000,
    releaseDate: new Date("1988-09-23"),
  },
  {
    id: 6,
    title: "Damnit",
    genre: "Rock and Roll",
    tempo: 130,
    collaborators: ["Not Radiohead", "Kimberly"],
    effects: ["compression", "reverb", "delay", "EQ"],
    hasVocals: false,
    isComplete: true,
    duration: 400,
    releaseDate: new Date("1975-01-01"),
  },
  {
    id: 7,
    title: "I'm Sorry",
    genre: "Rock and Roll",
    tempo: 126,
    collaborators: ["Skullz", "Meatheadz"],
    effects: ["compression"],
    hasVocals: true,
    isComplete: false,
    duration: 230,
    releaseDate: new Date("1983-02-09"),
  },
  {
    id: 8,
    title: "Cheese!",
    genre: "EDM",
    tempo: 200,
    collaborators: ["Amish People", "Brooklyn"],
    effects: [],
    hasVocals: false,
    isComplete: false,
    duration: 2230,
    releaseDate: new Date("1967-04-11"),
  },
  {
    id: 9,
    title: "Ambitions",
    genre: "EDM",
    tempo: 180,
    collaborators: ["The House", "gardens"],
    effects: ["EQ", "reverb"],
    hasVocals: true,
    isComplete: true,
    duration: 180,
    releaseDate: new Date("1999-06-10"),
  },
];

const calculateAverageTempoByGenre = (tracks: Track[], genre: string): GenreStats | null => {
  const genreTracks = tracks.filter((track) => track.genre === genre);

  if (genreTracks.length === 0) {
    return null;
  }

  const totalTempo = genreTracks.reduce((sum, track) => sum + track.tempo, 0);
  const averageTempo = Math.round((totalTempo / genreTracks.length) * 100) / 100;

  return {
    genre: genre,
    averageTempo: averageTempo,
    trackCount: genreTracks.length,
  };
};

console.log(calculateAverageTempoByGenre(tracks, "Jazz"));
console.log(calculateAverageTempoByGenre(tracks, "EDM"));
console.log(calculateAverageTempoByGenre(tracks, "Rock and Roll"));
