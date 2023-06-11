import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MosheListRelationFilter } from "../moshe/MosheListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  moshes?: MosheListRelationFilter;
  sessions?: SessionListRelationFilter;
  username?: StringFilter;
};
