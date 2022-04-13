import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPlaylistsInput } from "../inputs/UserCreateWithoutPlaylistsInput";
import { UserUpdateWithoutPlaylistsInput } from "../inputs/UserUpdateWithoutPlaylistsInput";

@TypeGraphQL.InputType("UserUpsertWithoutPlaylistsInput", {
  isAbstract: true
})
export class UserUpsertWithoutPlaylistsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPlaylistsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPlaylistsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPlaylistsInput, {
    nullable: false
  })
  create!: UserCreateWithoutPlaylistsInput;
}
