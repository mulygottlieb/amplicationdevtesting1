import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type SessionWhereInput = {
  id?: StringFilter;
  participants?: UserListRelationFilter;
};
