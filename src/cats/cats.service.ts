import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { Cat, CatDocument } from './schemas/cats.schema';
// import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { CatType } from './dto/create-cat.dto';
import { CatInput } from './inputs/cat.input';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private catModel: Model<Cat>) {}

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }

  async create(createCatDto: CatInput): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }

 
}