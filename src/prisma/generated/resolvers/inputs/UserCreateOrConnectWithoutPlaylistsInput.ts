import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPlaylistsInput } from "../inputs/UserCreateWithoutPlaylistsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutPlaylistsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutPlaylistsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPlaylistsInput, {
    nullable: false
  })
  create!: UserCreateWithoutPlaylistsInput;
}
