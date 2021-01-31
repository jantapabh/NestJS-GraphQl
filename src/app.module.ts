import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'
import { BookModule } from './book/book.module';
import { BookResolver } from './book/book.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      debug: false,
      playground: true,
    }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService, BookResolver],
})
export class AppModule {}
