import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger.middleware';
import { EventSourceController } from './EventSource/eventSource.controller';
import { WebSocketModule } from './WebSocket/websocket.module';
import { EventModule } from './gateways/event/event.module';

@Module({
  imports: [CatsModule, WebSocketModule, EventModule],
  controllers: [AppController, EventSourceController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
