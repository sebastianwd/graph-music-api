import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSongArgs } from "./args/AggregateSongArgs";
import { Song } from "../../../models/Song";
import { AggregateSong } from "../../outputs/AggregateSong";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Song)
export class AggregateSongResolver {
  @TypeGraphQL.Query(_returns => AggregateSong, {
    nullable: false
  })
  async aggregateSong(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSongArgs): Promise<AggregateSong> {
    return getPrismaFromContext(ctx).song.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
