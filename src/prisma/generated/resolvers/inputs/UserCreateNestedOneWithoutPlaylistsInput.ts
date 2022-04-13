import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPlaylistsInput } from "../inputs/UserCreateOrConnectWithoutPlaylistsInput";
import { UserCreateWithoutPlaylistsInput } from "../inputs/UserCreateWithoutPlaylistsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutPlaylistsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutPlaylistsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPlaylistsInput, {
    nullable: true
  })
  create?: UserCreateWithoutPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPlaylistsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
