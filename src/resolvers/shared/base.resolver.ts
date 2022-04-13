import { toGlobalId } from 'graphql-relay'
import { ClassType, FieldResolver, ID, Root, Resolver } from 'type-graphql'

export function createBaseResolver<T extends ClassType>(ObjectTypeCls: T) {
  @Resolver(() => ObjectTypeCls, { isAbstract: true })
  abstract class BaseResolver {
    @FieldResolver(() => ID, {
      name: 'id',
      description: 'The global ID of the object.',
    })
    globalId?(@Root() parent: { id: number }): string {
      return toGlobalId(`${ObjectTypeCls.name}`, `${parent.id}`)
    }
  }

  return BaseResolver
}
