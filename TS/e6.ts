/* Exercise 6: Find Scales Containing a Specific Note
Task: Create TypeScript interfaces based on the scales data from music.js.
Write a function that takes a note name and returns all scales (both major and minor) 
that contain that note in their scale. */

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

interface ScaleWithNote {
  scaleName: string;
  scaleType: "major" | "minor";
  notes: string[];
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
      name: "E-minor",
      hasSharpsOrFlats: true,
      numberOfSharpsOrFlats: 1,
      accidentalNoteNames: ["F-sharp"],
      relativeMajor: "G-major",
      notes: ["E", "F-sharp", "G", "A", "B", "C", "D", "E"],
      intervalsFromRoot: ["maj2nd", "min2nd", "P4th", "P5th", "min6th", "min7th", "P8va"],
      chords: {
        oneChord: "E-minor",
        twoChord: "F-sharp-diminished",
        threeChord: "G-major",
        fourChord: "A-minor",
        fiveChord: "B-minor",
        sixChord: "C-major",
        sevenChord: "D-major",
      },
    },
  ],
};

const findScalesContainingNote = (scales: Scales, noteName: string): ScaleWithNote[] => {
  const normalizedNote = noteName.toLowerCase();

  const majorMatches: ScaleWithNote[] = scales.majorScales
    .filter((scale) => scale.notes.some((note) => note.toLowerCase() === normalizedNote))
    .map((scale) => ({
      scaleName: scale.name,
      scaleType: "major" as const,
      notes: scale.notes,
    }));

  const minorMatches: ScaleWithNote[] = scales.minorScales
    .filter((scale) => scale.notes.some((note) => note.toLowerCase() === normalizedNote))
    .map((scale) => ({
      scaleName: scale.name,
      scaleType: "minor" as const,
      notes: scale.notes,
    }));

  return [...majorMatches, ...minorMatches];
};

console.log(findScalesContainingNote(scales, "F-sharp"));
console.log(findScalesContainingNote(scales, "C"));
