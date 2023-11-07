import { PazWhereInput } from "./PazWhereInput";
import { PazOrderByInput } from "./PazOrderByInput";

export type PazFindManyArgs = {
  where?: PazWhereInput;
  orderBy?: Array<PazOrderByInput>;
  skip?: number;
  take?: number;
};
