import { UserCreateNestedManyWithoutSessionsInput } from "./UserCreateNestedManyWithoutSessionsInput";

export type SessionCreateInput = {
  participants?: UserCreateNestedManyWithoutSessionsInput;
};
