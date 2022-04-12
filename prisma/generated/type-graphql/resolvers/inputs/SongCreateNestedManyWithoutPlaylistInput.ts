import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyPlaylistInputEnvelope } from "../inputs/SongCreateManyPlaylistInputEnvelope";
import { SongCreateOrConnectWithoutPlaylistInput } from "../inputs/SongCreateOrConnectWithoutPlaylistInput";
import { SongCreateWithoutPlaylistInput } from "../inputs/SongCreateWithoutPlaylistInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateNestedManyWithoutPlaylistInput", {
  isAbstract: true
})
export class SongCreateNestedManyWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutPlaylistInput], {
    nullable: true
  })
  create?: SongCreateWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutPlaylistInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => SongCreateManyPlaylistInputEnvelope, {
    nullable: true
  })
  createMany?: SongCreateManyPlaylistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  connect?: SongWhereUniqueInput[] | undefined;
}
