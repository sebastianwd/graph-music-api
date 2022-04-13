import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SongCreateWithoutPlaylistInput", {
  isAbstract: true
})
export class SongCreateWithoutPlaylistInput {
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
}
