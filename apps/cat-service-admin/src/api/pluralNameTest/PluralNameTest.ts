import { TestDatum } from "../testDatum/TestDatum";

export type PluralNameTest = {
  createdAt: Date;
  id: string;
  myEventData: string | null;
  testData?: Array<TestDatum>;
  updatedAt: Date;
};
