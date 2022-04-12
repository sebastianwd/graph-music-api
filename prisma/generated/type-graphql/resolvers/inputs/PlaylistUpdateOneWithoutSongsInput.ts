import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateOrConnectWithoutSongsInput } from "../inputs/PlaylistCreateOrConnectWithoutSongsInput";
import { PlaylistCreateWithoutSongsInput } from "../inputs/PlaylistCreateWithoutSongsInput";
import { PlaylistUpdateWithoutSongsInput } from "../inputs/PlaylistUpdateWithoutSongsInput";
import { PlaylistUpsertWithoutSongsInput } from "../inputs/PlaylistUpsertWithoutSongsInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistUpdateOneWithoutSongsInput", {
  isAbstract: true
})
export class PlaylistUpdateOneWithoutSongsInput {
  @TypeGraphQL.Field(_type => PlaylistCreateWithoutSongsInput, {
    nullable: true
  })
  create?: PlaylistCreateWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistCreateOrConnectWithoutSongsInput, {
    nullable: true
  })
  connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistUpsertWithoutSongsInput, {
    nullable: true
  })
  upsert?: PlaylistUpsertWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: true
  })
  connect?: PlaylistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistUpdateWithoutSongsInput, {
    nullable: true
  })
  update?: PlaylistUpdateWithoutSongsInput | undefined;
}
