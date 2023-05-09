import { PluralNameTest as TPluralNameTest } from "../api/pluralNameTest/PluralNameTest";

export const PLURALNAMETEST_TITLE_FIELD = "myEventData";

export const PluralNameTestTitle = (record: TPluralNameTest): string => {
  return record.myEventData || String(record.id);
};
