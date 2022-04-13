import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateManyUserInputEnvelope } from "../inputs/PlaylistCreateManyUserInputEnvelope";
import { PlaylistCreateOrConnectWithoutUserInput } from "../inputs/PlaylistCreateOrConnectWithoutUserInput";
import { PlaylistCreateWithoutUserInput } from "../inputs/PlaylistCreateWithoutUserInput";
import { PlaylistScalarWhereInput } from "../inputs/PlaylistScalarWhereInput";
import { PlaylistUpdateManyWithWhereWithoutUserInput } from "../inputs/PlaylistUpdateManyWithWhereWithoutUserInput";
import { PlaylistUpdateWithWhereUniqueWithoutUserInput } from "../inputs/PlaylistUpdateWithWhereUniqueWithoutUserInput";
import { PlaylistUpsertWithWhereUniqueWithoutUserInput } from "../inputs/PlaylistUpsertWithWhereUniqueWithoutUserInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class PlaylistUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PlaylistCreateWithoutUserInput], {
    nullable: true
  })
  create?: PlaylistCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PlaylistCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PlaylistCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  set?: PlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  delete?: PlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  connect?: PlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: PlaylistUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PlaylistScalarWhereInput[] | undefined;
}
