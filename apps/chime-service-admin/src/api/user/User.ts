import { Moshe } from "../moshe/Moshe";
import { JsonValue } from "type-fest";
import { Session } from "../session/Session";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  moshes?: Array<Moshe>;
  roles: JsonValue;
  sessions?: Array<Session>;
  updatedAt: Date;
  username: string;
};
