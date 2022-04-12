import * as TypeGraphQL from "type-graphql";

export enum PlaylistScalarFieldEnum {
  id = "id",
  name = "name",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(PlaylistScalarFieldEnum, {
  name: "PlaylistScalarFieldEnum",
  description: undefined,
});
