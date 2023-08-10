import { User } from "../../modes/user";

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>;
}
