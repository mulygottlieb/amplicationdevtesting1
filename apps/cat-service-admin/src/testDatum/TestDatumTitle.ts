import { TestDatum as TTestDatum } from "../api/testDatum/TestDatum";

export const TESTDATUM_TITLE_FIELD = "pluralNameTest";

export const TestDatumTitle = (record: TTestDatum): string => {
  return record.pluralNameTest || String(record.id);
};
