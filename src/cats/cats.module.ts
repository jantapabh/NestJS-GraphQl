import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
//import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatSchema } from './cats.schema';
import { CatsResolver } from './cats.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  controllers: [],
  providers: [CatsService, CatsResolver],
})
export class CatsModule {}