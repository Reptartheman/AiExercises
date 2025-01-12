import { describe, it, expect, vi } from 'vitest';
import { chainDelayedMessages } from '../exercises/e15.js';

describe('chainDelayedMessages', () => {
  it('should log all messages in sequence and return final message', async () => {
    const messages = ["Hello", "World", "How", "Are", "You"];
    const delay = 300;

    const result = await chainDelayedMessages(messages, delay);
    expect(result).toBe("All messages logged");
  });
});
