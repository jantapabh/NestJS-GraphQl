// import { Query } from "@nestjs/common";
import { Query, Resolver, Mutation, Args } from "@nestjs/graphql";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";
import { CatInput } from "./inputs/cat.input";
import { Cat } from "./interfaces/cat.interface";

// Resolver จะเป็นส่วนที่ทำการ Query (เปรียบเสมือนการ get Data) และ Mutation ทั้งหมดเช่นการสร้าง ลบ อัพเดพ ข้อมูล
@Resolver()
export class CatsResolver {

    constructor(
     private readonly catsService: CatsService,
     //private readonly postsService: PostsService
    ){}

    @Query(() => String)
    async hello()
    {
        return 'Hello Jan';
    }

    @Query(() => [CreateCatDto])
    async cats(){
        return this.catsService.findAll();
    }

    @Mutation(() => [CreateCatDto])
    async createCat(@Args('input') input: CatInput){
        return this.catsService.create(input);
    }

}