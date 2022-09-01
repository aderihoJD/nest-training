import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ChainService } from './chain.service';
import { ChainController } from './chain.controller';
import { logger, LoggerMiddleware } from 'src/helper/logger.middleware';
import { MongooseModule, } from '@nestjs/mongoose';
import { Chain, ChainSchema } from 'src/db/schemas/chain.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Chain.name, schema: ChainSchema}])],
  controllers: [ChainController],
  providers: [ChainService]
})
export class ChainModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes({ path: 'chain', method: RequestMethod.GET });
  }
}
