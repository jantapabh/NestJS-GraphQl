import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'
// import { BookModule } from './book/book.module';
import { BookResolver } from './book/book.resolver';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService, BookResolver],
})
export class AppModule {}
