import { describe, it, expect } from 'vitest';
import { createGreetingPromise } from '../exercises/e1.js';

describe('createGreetingPromise', () => {
  it('should resolve with "Hello, Promise!" after 1 second', () => {
    return createGreetingPromise().then(result => {
      expect(result).toBe('Hello, Promise!');
    });
  });
});



