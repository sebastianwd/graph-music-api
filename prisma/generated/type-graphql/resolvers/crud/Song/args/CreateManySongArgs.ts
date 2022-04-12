import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongCreateManyInput } from "../../../inputs/SongCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySongArgs {
  @TypeGraphQL.Field(_type => [SongCreateManyInput], {
    nullable: false
  })
  data!: SongCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
