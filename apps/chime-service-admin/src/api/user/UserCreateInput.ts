import { MosheCreateNestedManyWithoutUsersInput } from "./MosheCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SessionCreateNestedManyWithoutUsersInput } from "./SessionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  moshes?: MosheCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  sessions?: SessionCreateNestedManyWithoutUsersInput;
  username: string;
};
