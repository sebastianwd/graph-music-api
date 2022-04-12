import { Resolver, Query, Ctx } from 'type-graphql'
import { User } from '~/generated'
import { Context } from '~/types'

@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: Context): Promise<User | null> {
    if (!ctx.req.session!.userId) {
      return null
    }

    return ctx.prisma.user.findUnique({
      where: { id: ctx.req.session!.userId },
    })
  }
}
