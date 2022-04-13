import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongScalarWhereInput } from "../inputs/SongScalarWhereInput";
import { SongUpdateManyMutationInput } from "../inputs/SongUpdateManyMutationInput";

@TypeGraphQL.InputType("SongUpdateManyWithWhereWithoutPlaylistInput", {
  isAbstract: true
})
export class SongUpdateManyWithWhereWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => SongScalarWhereInput, {
    nullable: false
  })
  where!: SongScalarWhereInput;

  @TypeGraphQL.Field(_type => SongUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongUpdateManyMutationInput;
}
