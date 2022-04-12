import { Resolver, Mutation, Arg, InputType, Field, Ctx } from 'type-graphql'
import bcrypt from 'bcryptjs'
import { Context } from '~/types/types'
import { User } from '~/generated'

@InputType()
class RegisterInput {
  @Field()
  username: string

  @Field()
  email: string

  @Field()
  password: string
}

@Resolver()
class RegisterResolver {
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

export default RegisterResolver
