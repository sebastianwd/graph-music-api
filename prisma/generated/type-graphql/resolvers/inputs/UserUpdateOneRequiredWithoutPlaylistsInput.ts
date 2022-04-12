import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPlaylistsInput } from "../inputs/UserCreateOrConnectWithoutPlaylistsInput";
import { UserCreateWithoutPlaylistsInput } from "../inputs/UserCreateWithoutPlaylistsInput";
import { UserUpdateWithoutPlaylistsInput } from "../inputs/UserUpdateWithoutPlaylistsInput";
import { UserUpsertWithoutPlaylistsInput } from "../inputs/UserUpsertWithoutPlaylistsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPlaylistsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutPlaylistsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPlaylistsInput, {
    nullable: true
  })
  create?: UserCreateWithoutPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPlaylistsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPlaylistsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPlaylistsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutPlaylistsInput | undefined;
}
