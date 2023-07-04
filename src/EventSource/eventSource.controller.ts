import { Controller, Get, Res, Sse, MessageEvent } from '@nestjs/common';
import { Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Observable, interval, map } from 'rxjs';

@Controller('event-source')
export class EventSourceController {
  @Get()
  index(@Res() response: Response) {
    response
      .type('text/html')
      .send(readFileSync(join(__dirname, 'index.html')).toString());
  }

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return interval(4000).pipe(
      map(() => ({ data: { hello: 'world' } } as MessageEvent)),
    );
  }
}
