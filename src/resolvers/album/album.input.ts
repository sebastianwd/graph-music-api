import { ArgsType, Field } from 'type-graphql'

@ArgsType()
export class GetAlbumArgs {
  @Field(() => String)
  artistName: string

  @Field(() => String)
  trackTitle: string
}
