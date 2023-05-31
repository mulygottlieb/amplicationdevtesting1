import { User } from "../user/User";

export type Session = {
  id: string;
  participants?: Array<User>;
};
