import * as TypeGraphQL from "type-graphql";

export enum SongScalarFieldEnum {
  id = "id",
  title = "title",
  artist = "artist",
  album = "album",
  year = "year",
  duration = "duration",
  genre = "genre",
  playlistId = "playlistId"
}
TypeGraphQL.registerEnumType(SongScalarFieldEnum, {
  name: "SongScalarFieldEnum",
  description: undefined,
});
