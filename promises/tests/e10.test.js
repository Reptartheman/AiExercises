import { describe, it, expect } from 'vitest';
import { controlledDelayChain } from '../exercises/e10.js';

describe('controlledDelayChain', () => {
  it('should increase the value by 2 through chained promises with delay in first step only', () => {
    return controlledDelayChain(5).then(result => {
      expect(result).toBe(7);
    });
  });
});
