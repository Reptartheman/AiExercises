import { describe, it, expect } from 'vitest';
import { getMusiciansByWorkLength } from '../exercises/e5.js';
import { jazzMusicians } from '../musicians.js';

describe('getMusiciansByWorkLength', () => {
  it('should exist', () => {
    expect(getMusiciansByWorkLength).toBeInstanceOf(Function);
  })
  it('should return musicians with at least two famous works', () => {
    const result = getMusiciansByWorkLength(jazzMusicians, 2);
    expect(result.length).toBe(10);
  });

  it('should handle invalid work length gracefully', () => {
    const result = getMusiciansByWorkLength(jazzMusicians, 'invalid');
    expect(result).toBeUndefined();
  });
});
