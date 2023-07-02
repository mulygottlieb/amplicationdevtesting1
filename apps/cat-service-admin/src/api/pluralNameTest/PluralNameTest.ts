import { TestDatum } from "../testDatum/TestDatum";
import { TransactionMetaDatum } from "../transactionMetaDatum/TransactionMetaDatum";

export type PluralNameTest = {
  createdAt: Date;
  id: string;
  myEventData: string | null;
  testData?: Array<TestDatum>;
  transactionMetaData?: Array<TransactionMetaDatum>;
  updatedAt: Date;
};
