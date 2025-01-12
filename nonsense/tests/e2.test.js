import { describe, it, expect } from 'vitest';
import { keysContainingString } from '../exercises/e2';
import { objectOfStuff } from '../practice';

describe('keysContainingString', () => {
  it('should return keys that contain "thing"', () => {
    const result = keysContainingString(objectOfStuff, 'thing');
    expect(result).toEqual(['thing1', 'thing2', 'thing3', 'thing4', 'thing5', 'thing6', 'thing7']);
  });

  it('should return an empty array if no keys contain the string', () => {
    const result = keysContainingString(objectOfStuff, 'nonexistent');
    expect(result).toEqual([]);
  });
});
