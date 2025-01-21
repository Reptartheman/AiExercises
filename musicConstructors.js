export class Scale {
  constructor(name, hasSharpsOrFlats, numberOfSharpsOrFlats, accidentalNoteNames, notes, intervalsFromRoot, chords) {
    this.name = name;
    this.hasSharpsOrFlats = hasSharpsOrFlats;
    this.numberOfSharpsOrFlats = numberOfSharpsOrFlats;
    this.accidentalNoteNames = accidentalNoteNames;
    this.notes = notes;
    this.intervalsFromRoot = intervalsFromRoot;
    this.chords = chords;
  };
};

export class MajorScale extends Scale {
  constructor(name, hasSharpsOrFlats, numberOfSharpsOrFlats, accidentalNoteNames, notes, intervalsFromRoot, chords) {
    super(name, hasSharpsOrFlats, numberOfSharpsOrFlats, accidentalNoteNames, notes, intervalsFromRoot, chords, relativeMinor);
      this.relativeMinor = relativeMinor;
  };
};

export class MinorScale extends Scale {
  constructor(name, hasSharpsOrFlats, numberOfSharpsOrFlats, accidentalNoteNames, notes, intervalsFromRoot, chords) {
    super(name, hasSharpsOrFlats, numberOfSharpsOrFlats, accidentalNoteNames, notes, intervalsFromRoot, chords, relativeMajor);
      this.relativeMajor = relativeMajor;
  };
};


export class Instrument {
  constructor(name, type, range, isTransposed, commonGenres) {
    this.name = name;
    this.type = type;
    this.range = range;
    this.isTransposed = isTransposed;
    this.commonGenres = commonGenres;
  } 
}