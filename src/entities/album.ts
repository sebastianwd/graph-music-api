import { Field, ObjectType } from 'type-graphql'

@ObjectType()
class Album {
  @Field()
  title: string

  @Field()
  artistName: string

  @Field({ nullable: true })
  coverImage?: string

  @Field({ nullable: true })
  genre?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  year?: string

  @Field(() => [String])
  tracks: string[]
}

export default Album
