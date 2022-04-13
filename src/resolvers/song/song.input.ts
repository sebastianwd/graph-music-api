import { ArgsType, Field, Int } from 'type-graphql'

@ArgsType()
export class GetYoutubeIdsArgs {
  @Field(() => String)
  artistName: string

  @Field(() => String)
  trackTitle: string

  @Field(() => Int, { defaultValue: 2 })
  limit: number
}
