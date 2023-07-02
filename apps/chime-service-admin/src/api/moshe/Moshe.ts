import { User } from "../user/User";

export type Moshe = {
  createdAt: Date;
  id: string;
  owner?: User | null;
  updatedAt: Date;
};
