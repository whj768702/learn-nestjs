import {
  SubscribeMessage,
  MessageBody,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class EventGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  findAll(@MessageBody() data: number[]): Observable<WsResponse<number>> {
    console.log('data', data);
    return from(data).pipe(map((item) => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
}
