import { PluralNameTest } from "../pluralNameTest/PluralNameTest";

export type TransactionMetaDatum = {
  createdAt: Date;
  id: string;
  pluralNameTest?: PluralNameTest | null;
  updatedAt: Date;
};
