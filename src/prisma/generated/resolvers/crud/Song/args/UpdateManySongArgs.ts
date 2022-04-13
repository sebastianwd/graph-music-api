import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongUpdateManyMutationInput } from "../../../inputs/SongUpdateManyMutationInput";
import { SongWhereInput } from "../../../inputs/SongWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySongArgs {
  @TypeGraphQL.Field(_type => SongUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SongWhereInput, {
    nullable: true
  })
  where?: SongWhereInput | undefined;
}
