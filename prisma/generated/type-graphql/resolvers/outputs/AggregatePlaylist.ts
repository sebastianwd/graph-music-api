import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistAvgAggregate } from "../outputs/PlaylistAvgAggregate";
import { PlaylistCountAggregate } from "../outputs/PlaylistCountAggregate";
import { PlaylistMaxAggregate } from "../outputs/PlaylistMaxAggregate";
import { PlaylistMinAggregate } from "../outputs/PlaylistMinAggregate";
import { PlaylistSumAggregate } from "../outputs/PlaylistSumAggregate";

@TypeGraphQL.ObjectType("AggregatePlaylist", {
  isAbstract: true
})
export class AggregatePlaylist {
  @TypeGraphQL.Field(_type => PlaylistCountAggregate, {
    nullable: true
  })
  _count!: PlaylistCountAggregate | null;

  @TypeGraphQL.Field(_type => PlaylistAvgAggregate, {
    nullable: true
  })
  _avg!: PlaylistAvgAggregate | null;

  @TypeGraphQL.Field(_type => PlaylistSumAggregate, {
    nullable: true
  })
  _sum!: PlaylistSumAggregate | null;

  @TypeGraphQL.Field(_type => PlaylistMinAggregate, {
    nullable: true
  })
  _min!: PlaylistMinAggregate | null;

  @TypeGraphQL.Field(_type => PlaylistMaxAggregate, {
    nullable: true
  })
  _max!: PlaylistMaxAggregate | null;
}
