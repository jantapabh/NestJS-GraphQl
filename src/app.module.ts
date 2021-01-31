import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'
import { BookModule } from './book/book.module';
import { BookResolver } from './book/book.resolver';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:'schema.gql',
    }),
    BookModule,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService, BookResolver],
})
export class AppModule {}
