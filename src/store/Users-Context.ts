import { createContext } from "react";

interface IUserContext {
  users: { id: string; name: string }[];
}

const UsersContext = createContext<IUserContext>({
  users: [],
});

export default UsersContext;
