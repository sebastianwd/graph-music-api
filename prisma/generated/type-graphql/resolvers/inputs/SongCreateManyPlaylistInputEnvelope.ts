import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyPlaylistInput } from "../inputs/SongCreateManyPlaylistInput";

@TypeGraphQL.InputType("SongCreateManyPlaylistInputEnvelope", {
  isAbstract: true
})
export class SongCreateManyPlaylistInputEnvelope {
  @TypeGraphQL.Field(_type => [SongCreateManyPlaylistInput], {
    nullable: false
  })
  data!: SongCreateManyPlaylistInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
