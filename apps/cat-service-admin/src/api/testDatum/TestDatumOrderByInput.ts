import { SortOrder } from "../../util/SortOrder";

export type TestDatumOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  pluralNameTestId?: SortOrder;
  updatedAt?: SortOrder;
};
