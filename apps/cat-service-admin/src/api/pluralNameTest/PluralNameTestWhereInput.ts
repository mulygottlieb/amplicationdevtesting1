import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TestDatumListRelationFilter } from "../testDatum/TestDatumListRelationFilter";
import { TransactionMetaDatumListRelationFilter } from "../transactionMetaDatum/TransactionMetaDatumListRelationFilter";

export type PluralNameTestWhereInput = {
  id?: StringFilter;
  myEventData?: StringNullableFilter;
  testData?: TestDatumListRelationFilter;
  transactionMetaData?: TransactionMetaDatumListRelationFilter;
};
