import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistAvgAggregate } from "../outputs/PlaylistAvgAggregate";
import { PlaylistCountAggregate } from "../outputs/PlaylistCountAggregate";
import { PlaylistMaxAggregate } from "../outputs/PlaylistMaxAggregate";
import { PlaylistMinAggregate } from "../outputs/PlaylistMinAggregate";
import { PlaylistSumAggregate } from "../outputs/PlaylistSumAggregate";

@TypeGraphQL.ObjectType("PlaylistGroupBy", {
  isAbstract: true
})
export class PlaylistGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
