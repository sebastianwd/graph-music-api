import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongWhereInput } from "../../../inputs/SongWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySongArgs {
  @TypeGraphQL.Field(_type => SongWhereInput, {
    nullable: true
  })
  where?: SongWhereInput | undefined;
}
