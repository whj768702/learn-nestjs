import {
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'ws';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@WebSocketGateway(8085, { cors: true, transports: ['websocket'] })
export class WebSocketController {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): string {
    return data;
  }
  // onEvent(client: any, data: any): Observable<WsResponse<number>> {
  //   console.log(data);
  //   return from([1, 2, 3]).pipe(
  //     map((item) => ({ event: 'events', data: item })),
  //   );
  // }
}
