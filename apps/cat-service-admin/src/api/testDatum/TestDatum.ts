import { PluralNameTest } from "../pluralNameTest/PluralNameTest";

export type TestDatum = {
  createdAt: Date;
  id: string;
  pluralNameTest?: PluralNameTest | null;
  updatedAt: Date;
};
