import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MulyWhereInput = {
  id?: StringFilter;
  jfield?: JsonFilter;
  dsfs?: StringNullableFilter;
  cvxcv?: StringNullableFilter;
};
