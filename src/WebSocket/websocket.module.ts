import { Module } from '@nestjs/common';
import { WebSocketController } from './websocket.gateway';

@Module({
  providers: [WebSocketController],
})
export class WebSocketModule {}
