import { z } from 'zod';
import { ZodValidationPipe } from './zod-validation.pipe';

describe('ZodValidationPipe', () => {
  it('should be defined', () => {
    const schema = z.object({})

    expect(new ZodValidationPipe(schema)).toBeDefined();
  });
});
