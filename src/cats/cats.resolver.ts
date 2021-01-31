// import { Query } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";


@Resolver()
export class CatsResolver {
    // constructor(
    //     private readonly authorsService: AuthorsService,
    //     private readonly postsService: PostsService
    // ){}

    @Query(() => String)
    async hello()
    {
        return 'Hello Jan';
    }

    // @ResolveProperty()
    // async posts(@Parent() author){
    //     const { id } = author;
    //     return await this.postsService.findAll({
    //         authorId: id
    //     });
    // } 
}