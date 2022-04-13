import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateManyUserInputEnvelope } from "../inputs/PlaylistCreateManyUserInputEnvelope";
import { PlaylistCreateOrConnectWithoutUserInput } from "../inputs/PlaylistCreateOrConnectWithoutUserInput";
import { PlaylistCreateWithoutUserInput } from "../inputs/PlaylistCreateWithoutUserInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class PlaylistCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PlaylistCreateWithoutUserInput], {
    nullable: true
  })
  create?: PlaylistCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PlaylistCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PlaylistCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  connect?: PlaylistWhereUniqueInput[] | undefined;
}
