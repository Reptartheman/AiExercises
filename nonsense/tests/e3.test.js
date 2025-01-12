import { describe, it, expect } from 'vitest';
import { countBooleans } from '../exercises/e3';
import { arrayOfStuff } from '../practice';

describe('countBooleans', () => {
  it('should return the number of boolean values', () => {
    const result = countBooleans(arrayOfStuff);
    expect(result).toBe(2);
  });

  it('should return 0 if there are no boolean values', () => {
    expect(countBooleans([1, 'hello', {}])).toBe(0);
  });
});
