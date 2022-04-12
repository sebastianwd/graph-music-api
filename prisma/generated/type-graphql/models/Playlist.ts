import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Song } from "../models/Song";
import { User } from "../models/User";
import { PlaylistCount } from "../resolvers/outputs/PlaylistCount";

@TypeGraphQL.ObjectType("Playlist", {
  isAbstract: true
})
export class Playlist {
  id?: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  User?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  songs?: Song[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => PlaylistCount, {
    nullable: true
  })
  _count?: PlaylistCount | null;
}
