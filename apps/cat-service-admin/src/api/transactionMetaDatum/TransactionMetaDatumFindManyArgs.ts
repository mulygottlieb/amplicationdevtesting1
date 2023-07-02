import { TransactionMetaDatumWhereInput } from "./TransactionMetaDatumWhereInput";
import { TransactionMetaDatumOrderByInput } from "./TransactionMetaDatumOrderByInput";

export type TransactionMetaDatumFindManyArgs = {
  where?: TransactionMetaDatumWhereInput;
  orderBy?: Array<TransactionMetaDatumOrderByInput>;
  skip?: number;
  take?: number;
};
