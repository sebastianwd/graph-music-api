import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SongUpdateManyWithoutPlaylistInput } from "../inputs/SongUpdateManyWithoutPlaylistInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPlaylistsInput } from "../inputs/UserUpdateOneRequiredWithoutPlaylistsInput";

@TypeGraphQL.InputType("PlaylistUpdateInput", {
  isAbstract: true
})
export class PlaylistUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPlaylistsInput, {
    nullable: true
  })
  User?: UserUpdateOneRequiredWithoutPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateManyWithoutPlaylistInput, {
    nullable: true
  })
  songs?: SongUpdateManyWithoutPlaylistInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
