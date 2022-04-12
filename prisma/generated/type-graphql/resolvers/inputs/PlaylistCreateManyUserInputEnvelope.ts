import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateManyUserInput } from "../inputs/PlaylistCreateManyUserInput";

@TypeGraphQL.InputType("PlaylistCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class PlaylistCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [PlaylistCreateManyUserInput], {
    nullable: false
  })
  data!: PlaylistCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
