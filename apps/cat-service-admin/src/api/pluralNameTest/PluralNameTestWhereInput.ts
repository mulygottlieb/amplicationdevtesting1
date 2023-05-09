import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TestDatumListRelationFilter } from "../testDatum/TestDatumListRelationFilter";

export type PluralNameTestWhereInput = {
  id?: StringFilter;
  myEventData?: StringNullableFilter;
  testData?: TestDatumListRelationFilter;
};
