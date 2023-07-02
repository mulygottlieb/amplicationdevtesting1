import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MosheWhereInput = {
  id?: StringFilter;
  owner?: UserWhereUniqueInput;
};
