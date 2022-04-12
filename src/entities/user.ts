import { createBaseResolver } from './shared/base-resolver'
import { User } from '~/generated'
import { Resolver } from 'type-graphql'

const UserBaseResolver = createBaseResolver(User)

@Resolver(() => User)
export class UserResolver extends UserBaseResolver {}

export default UserResolver
