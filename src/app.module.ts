import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsResolver } from './cats/cats.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
