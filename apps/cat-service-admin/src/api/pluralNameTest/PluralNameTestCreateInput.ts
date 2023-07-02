import { TestDatumCreateNestedManyWithoutPluralNameTestsInput } from "./TestDatumCreateNestedManyWithoutPluralNameTestsInput";
import { TransactionMetaDatumCreateNestedManyWithoutPluralNameTestsInput } from "./TransactionMetaDatumCreateNestedManyWithoutPluralNameTestsInput";

export type PluralNameTestCreateInput = {
  myEventData?: string | null;
  testData?: TestDatumCreateNestedManyWithoutPluralNameTestsInput;
  transactionMetaData?: TransactionMetaDatumCreateNestedManyWithoutPluralNameTestsInput;
};
