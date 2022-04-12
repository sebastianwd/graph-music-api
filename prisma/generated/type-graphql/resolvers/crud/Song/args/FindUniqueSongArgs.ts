import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongWhereUniqueInput } from "../../../inputs/SongWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSongArgs {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;
}
