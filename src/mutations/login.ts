import { Resolver, Mutation, Arg, Ctx, InputType, Field } from 'type-graphql'
import bcrypt from 'bcryptjs'
import { Context } from '~/types'
import { User } from '~/generated'

@InputType()
export class LoginInput {
  @Field()
  email: string

  @Field()
  password: string
}

@Resolver()
class LoginResolver {
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
}

export default LoginResolver
