import { describe, it, expect } from "vitest";
import { allMusicians } from "../exercises/e1";
import { jazzMusicians as musicians } from "../musicians"; // Renamed import

describe('allMusicians', () => {
  it('Should exist', () => {
    expect(allMusicians).toBeInstanceOf(Function);
  });
  it('There should be 10 elements', () => {
    expect(allMusicians(musicians).length).toEqual(10)
  });
  it('Should return the names of all jazz musicians', () => {
    expect(allMusicians(musicians)).toEqual(['Louis Armstrong', 'Miles Davis', 'John Coltrane', 'Duke Ellington','Charlie Parker','Billie Holiday','Thelonious Monk','Ella Fitzgerald','Dizzy Gillespie','Herbie Hancock'])
  });
})