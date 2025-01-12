import { describe, it, expect } from 'vitest';
import { delayedError } from '../exercises/e7.js';

describe('delayedError', () => {
  it('should reject with "Error after delay" after 2 seconds', () => {
    return delayedError().catch(error => {
      expect(error).toBe('Error after delay');
    });
  });
});
