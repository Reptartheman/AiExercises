import { describe, it, expect } from 'vitest';
import { immediateResolution } from '../exercises/e9.js';

describe('immediateResolution', () => {
  it('should resolve with "Immediate Success!"', () => {
    return immediateResolution().then(result => {
      expect(result).toBe('Immediate Success!');
    });
  });
});
