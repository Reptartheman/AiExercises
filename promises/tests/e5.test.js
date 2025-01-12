import { describe, it, expect } from 'vitest';
import { logMessageAfterDelay } from '../exercises/e5.js';

describe('logMessageAfterDelay', () => {
  it('should resolve with the message after a delay', () => {
    return logMessageAfterDelay('Delayed Message', 1000).then(result => {
      expect(result).toBe('Delayed Message');
    });
  });
});