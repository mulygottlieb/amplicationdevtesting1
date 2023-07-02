import { StringFilter } from "../../util/StringFilter";
import { PluralNameTestWhereUniqueInput } from "../pluralNameTest/PluralNameTestWhereUniqueInput";

export type TransactionMetaDatumWhereInput = {
  id?: StringFilter;
  pluralNameTest?: PluralNameTestWhereUniqueInput;
};
