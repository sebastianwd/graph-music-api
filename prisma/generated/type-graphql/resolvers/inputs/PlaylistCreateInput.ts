import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateNestedManyWithoutPlaylistInput } from "../inputs/SongCreateNestedManyWithoutPlaylistInput";
import { UserCreateNestedOneWithoutPlaylistsInput } from "../inputs/UserCreateNestedOneWithoutPlaylistsInput";

@TypeGraphQL.InputType("PlaylistCreateInput", {
  isAbstract: true
})
export class PlaylistCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPlaylistsInput, {
    nullable: false
  })
  User!: UserCreateNestedOneWithoutPlaylistsInput;

  @TypeGraphQL.Field(_type => SongCreateNestedManyWithoutPlaylistInput, {
    nullable: true
  })
  songs?: SongCreateNestedManyWithoutPlaylistInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
