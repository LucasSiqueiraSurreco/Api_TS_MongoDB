import { User } from "../../modes/user";

export interface CreateUserParams {
  firstName: string;
  lastName: string;
  emal: string;
  password: string;
}

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>;
}
