import { describe, it, expect } from 'vitest';
import { doubleMeDaddy } from '../exercises/e6.js';

describe('doubleMeDaddy', () => {
  it('should double the value twice through chaining', () => {
    return doubleMeDaddy(2).then(result => {
      expect(result).toBe(8); // 2 doubled to 4, then doubled again to 8
    });
  });
});
