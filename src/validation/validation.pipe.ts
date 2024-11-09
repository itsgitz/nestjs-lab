import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ZodError, ZodIssue, ZodIssueCode, ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (err) {
      if (err instanceof ZodError) {
        const zodIssues = JSON.parse((err as ZodError).message) as ZodIssue[]
        const exceptions = zodIssues.map((e) => {
          let message = e.message
          if (e.path.length > 0) message += ` (${e.path.join(',')})`
          return message
        })

        throw new BadRequestException(exceptions)
      }

      const exception = (err as Error).message 
      throw new BadRequestException(exception);
    }
  }
}
