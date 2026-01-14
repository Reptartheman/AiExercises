/* Exercise 3: Find Scales by Number of Accidentals
Task: Create TypeScript interfaces based on the scales data from music.js.
Write a function that takes a number and returns all scales (both major and minor) 
that have exactly that number of sharps or flats. */

interface Chords {
  oneChord: string;
  twoChord: string;
  threeChord: string;
  fourChord: string;
  fiveChord: string;
  sixChord: string;
  sevenChord: string;
}

interface MajorScale {
  name: string;
  hasSharpsOrFlats: boolean;
  numberOfSharpsOrFlats: number;
  accidentalNoteNames: string[] | null;
  relativeMinor: string;
  notes: string[];
  intervalsFromRoot: string[];
  chords: Chords;
}

interface MinorScale {
  name: string;
  hasSharpsOrFlats: boolean;
  numberOfSharpsOrFlats: number;
  accidentalNoteNames: string[] | string | null;
  relativeMajor: string;
  notes: string[];
  intervalsFromRoot: string[];
  chords: Chords;
}

interface Scales {
  majorScales: MajorScale[];
  minorScales: MinorScale[];
}

interface ScaleResult {
  name: string;
  type: "major" | "minor";
  accidentalNoteNames: string[] | string | null;
}

const scales: Scales = {
  majorScales: [
    {
      name: "C-Major",
      hasSharpsOrFlats: false,
      numberOfSharpsOrFlats: 0,
      accidentalNoteNames: null,
      relativeMinor: "a-minor",
      notes: ["C", "D", "E", "F", "G", "A", "B", "C"],
      intervalsFromRoot: ["maj2nd", "maj3rd", "P4th", "P5th", "maj6th", "maj7th", "P8va"],
      chords: {
        oneChord: "C-major",
        twoChord: "D-minor",
        threeChord: "E-minor",
        fourChord: "F-major",
        fiveChord: "G-major",
        sixChord: "A-minor",
        sevenChord: "B-diminished",
      },
    },
    {
      name: "F-Major",
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 1,
      accidentalNoteNames: ["B-flat"],
      relativeMinor: "d-minor",
      notes: ["F", "G", "A", "B-flat", "C", "D", "E", "F"],
      intervalsFromRoot: ["maj2nd", "maj3rd", "P4th", "P5th", "maj6th", "maj7th", "P8va"],
      chords: {
        oneChord: "F-major",
        twoChord: "G-minor",
        threeChord: "A-minor",
        fourChord: "B-flat-Major",
        fiveChord: "C-Major",
        sixChord: "A-minor",
        sevenChord: "E-diminished",
      },
    },
    {
      name: "G-major",
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 1,
      accidentalNoteNames: ["F-sharp"],
      relativeMinor: "e-minor",
      notes: ["G", "A", "B", "C", "D", "E", "F-sharp", "G"],
      intervalsFromRoot: ["maj2nd", "maj3rd", "P4th", "P5th", "maj6th", "maj7th", "P8va"],
      chords: {
        oneChord: "G-major",
        twoChord: "A-minor",
        threeChord: "B-minor",
        fourChord: "C-major",
        fiveChord: "D-major",
        sixChord: "E-minor",
        sevenChord: "F-sharp-diminished",
      },
    },
    {
      name: "D-major",
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 2,
      accidentalNoteNames: ["F-sharp", "C-sharp"],
      relativeMinor: "b-minor",
      notes: ["D", "E", "F-sharp", "G", "A", "B", "C-sharp", "D"],
      intervalsFromRoot: ["maj2nd", "maj3rd", "P4th", "P5th", "maj6th", "maj7th", "P8va"],
      chords: {
        oneChord: "D-major",
        twoChord: "E-minor",
        threeChord: "F-sharp-minor",
        fourChord: "G-major",
        fiveChord: "A-major",
        sixChord: "B-minor",
        sevenChord: "C-sharp-diminished",
      },
    },
  ],
  minorScales: [
    {
      name: "A-minor",
      hasSharpsOrFlats: false,
      numberOfSharpsOrFlats: 0,
      accidentalNoteNames: null,
      relativeMajor: "C-major",
      notes: ["A", "B", "C", "D", "E", "F", "G", "A"],
      intervalsFromRoot: ["maj2nd", "min2nd", "P4th", "P5th", "min6th", "min7th", "P8va"],
      chords: {
        oneChord: "A-minor",
        twoChord: "B-diminished",
        threeChord: "C-major",
        fourChord: "D-minor",
        fiveChord: "E-minor",
        sixChord: "F-major",
        sevenChord: "G-major",
      },
    },
    {
      name: "D-minor",
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 1,
      accidentalNoteNames: "B-flat",
      relativeMajor: "F-major",
      notes: ["D", "E", "F", "G", "A", "B-flat", "C", "D"],
      intervalsFromRoot: ["maj2nd", "min2nd", "P4th", "P5th", "min6th", "min7th", "P8va"],
      chords: {
        oneChord: "D-minor",
        twoChord: "E-diminished",
        threeChord: "F-major",
        fourChord: "G-minor",
        fiveChord: "A-minor",
        sixChord: "B-flat-major",
        sevenChord: "C-major",
      },
    },
    {
      name: "G-minor",
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 2,
      accidentalNoteNames: ["B-flat", "E-flat"],
      relativeMajor: "B-flat-major",
      notes: ["G", "A", "B-flat", "C", "D", "E-flat", "F", "G"],
      intervalsFromRoot: ["maj2nd", "min2nd", "P4th", "P5th", "min6th", "min7th", "P8va"],
      chords: {
        oneChord: "G-minor",
        twoChord: "A-diminished",
        threeChord: "B-flat-major",
        fourChord: "C-minor",
        fiveChord: "D-minor",
        sixChord: "E-flat-major",
        sevenChord: "F-major",
      },
    },
  ],
};

const findScalesByAccidentals = (scales: Scales, numAccidentals: number): ScaleResult[] => {
  const majorMatches: ScaleResult[] = scales.majorScales
    .filter((scale) => scale.numberOfSharpsOrFlats === numAccidentals)
    .map((scale) => ({
      name: scale.name,
      type: "major" as const,
      accidentalNoteNames: scale.accidentalNoteNames,
    }));

  const minorMatches: ScaleResult[] = scales.minorScales
    .filter((scale) => scale.numberOfSharpsOrFlats === numAccidentals)
    .map((scale) => ({
      name: scale.name,
      type: "minor" as const,
      accidentalNoteNames: scale.accidentalNoteNames,
    }));

  return [...majorMatches, ...minorMatches];
};

console.log(findScalesByAccidentals(scales, 1));
