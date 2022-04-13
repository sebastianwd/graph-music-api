import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateOrConnectWithoutSongsInput } from "../inputs/PlaylistCreateOrConnectWithoutSongsInput";
import { PlaylistCreateWithoutSongsInput } from "../inputs/PlaylistCreateWithoutSongsInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistCreateNestedOneWithoutSongsInput", {
  isAbstract: true
})
export class PlaylistCreateNestedOneWithoutSongsInput {
  @TypeGraphQL.Field(_type => PlaylistCreateWithoutSongsInput, {
    nullable: true
  })
  create?: PlaylistCreateWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistCreateOrConnectWithoutSongsInput, {
    nullable: true
  })
  connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: true
  })
  connect?: PlaylistWhereUniqueInput | undefined;
}
