import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyPlaylistInputEnvelope } from "../inputs/SongCreateManyPlaylistInputEnvelope";
import { SongCreateOrConnectWithoutPlaylistInput } from "../inputs/SongCreateOrConnectWithoutPlaylistInput";
import { SongCreateWithoutPlaylistInput } from "../inputs/SongCreateWithoutPlaylistInput";
import { SongScalarWhereInput } from "../inputs/SongScalarWhereInput";
import { SongUpdateManyWithWhereWithoutPlaylistInput } from "../inputs/SongUpdateManyWithWhereWithoutPlaylistInput";
import { SongUpdateWithWhereUniqueWithoutPlaylistInput } from "../inputs/SongUpdateWithWhereUniqueWithoutPlaylistInput";
import { SongUpsertWithWhereUniqueWithoutPlaylistInput } from "../inputs/SongUpsertWithWhereUniqueWithoutPlaylistInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateManyWithoutPlaylistInput", {
  isAbstract: true
})
export class SongUpdateManyWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutPlaylistInput], {
    nullable: true
  })
  create?: SongCreateWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutPlaylistInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpsertWithWhereUniqueWithoutPlaylistInput], {
    nullable: true
  })
  upsert?: SongUpsertWithWhereUniqueWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => SongCreateManyPlaylistInputEnvelope, {
    nullable: true
  })
  createMany?: SongCreateManyPlaylistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  set?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  delete?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  connect?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateWithWhereUniqueWithoutPlaylistInput], {
    nullable: true
  })
  update?: SongUpdateWithWhereUniqueWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateManyWithWhereWithoutPlaylistInput], {
    nullable: true
  })
  updateMany?: SongUpdateManyWithWhereWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongScalarWhereInput[] | undefined;
}
