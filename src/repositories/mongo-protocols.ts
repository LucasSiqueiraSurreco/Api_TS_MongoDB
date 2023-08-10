import { User } from "../modes/user";

export type MongoUser = Omit<User, "id">;
