import { User } from "../../modes/user";
export interface IDeleteUserRepository {
  deleteUser(id: string): Promise<User>;
}
