import { User } from "../user/User";

export type Session = {
  createdAt: Date;
  id: string;
  participants?: Array<User>;
  updatedAt: Date;
};
