import { TransactionMetaDatum as TTransactionMetaDatum } from "../api/transactionMetaDatum/TransactionMetaDatum";

export const TRANSACTIONMETADATUM_TITLE_FIELD = "pluralNameTest";

export const TransactionMetaDatumTitle = (
  record: TTransactionMetaDatum
): string => {
  return record.pluralNameTest || String(record.id);
};
