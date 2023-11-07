import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PazWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
