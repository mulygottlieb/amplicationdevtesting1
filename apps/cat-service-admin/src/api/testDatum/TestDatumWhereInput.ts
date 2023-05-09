import { StringFilter } from "../../util/StringFilter";
import { PluralNameTestWhereUniqueInput } from "../pluralNameTest/PluralNameTestWhereUniqueInput";

export type TestDatumWhereInput = {
  id?: StringFilter;
  pluralNameTest?: PluralNameTestWhereUniqueInput;
};
