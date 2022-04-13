import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Playlist } from "../models/Playlist";

@TypeGraphQL.ObjectType("Song", {
  isAbstract: true
})
export class Song {
  id?: number;

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
  album?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  year?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  duration?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  genre?: string | null;

  Playlist?: Playlist | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  playlistId?: number | null;
}
