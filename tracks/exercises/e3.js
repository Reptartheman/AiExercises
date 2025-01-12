export class Track {
  constructor({ id, title, genre, tempo, collaborators, effects, hasVocals, isComplete, duration, releaseDate }) {
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.tempo = tempo;
    this.collaborators = collaborators;
    this.effects = effects;
    this.hasVocals = hasVocals;
    this.isComplete = isComplete;
    this.duration = duration;
    this.releaseDate = releaseDate;
  }
}
