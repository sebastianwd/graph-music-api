import { Resolver, Query, Ctx, Mutation, Arg } from 'type-graphql'
import { createBaseResolver } from '~/resolvers/shared/base.resolver'
import bcrypt from 'bcryptjs'
import { User } from '~/generated'
import { Context } from '~/types'
import { LoginInput, RegisterInput } from './user.input'

const UserBaseResolver = createBaseResolver(User)

@Resolver(() => User)
export class UserResolver extends UserBaseResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: Context): Promise<User | null> {
    if (!ctx.req.session!.userId) {
      return null
    }

    return ctx.prisma.user.findUnique({
      where: { id: ctx.req.session!.userId },
    })
  }

  @Mutation(() => User, { nullable: true })
  async login(
    @Arg('input') args: LoginInput,
    @Ctx() ctx: Context
  ): Promise<User | undefined> {
    const { email, password } = args

    const user = await ctx.prisma.user.findUnique({ where: { email } })

    if (!user) {
      return undefined
    }

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
      return undefined
    }

    ctx.req.session!.userId = user.id

    return user
  }

  @Mutation(() => User)
  async register(
    @Arg('input') args: RegisterInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    const { password } = args

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = ctx.prisma.user.create({
      data: {
        ...args,
        password: hashedPassword,
      },
    })

    return user
  }
}
