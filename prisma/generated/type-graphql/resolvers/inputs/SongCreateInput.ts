import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateNestedOneWithoutSongsInput } from "../inputs/PlaylistCreateNestedOneWithoutSongsInput";

@TypeGraphQL.InputType("SongCreateInput", {
  isAbstract: true
})
export class SongCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  artist!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  album?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  year?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  duration?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  genre?: string | undefined;

  @TypeGraphQL.Field(_type => PlaylistCreateNestedOneWithoutSongsInput, {
    nullable: true
  })
  Playlist?: PlaylistCreateNestedOneWithoutSongsInput | undefined;
}
