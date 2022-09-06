import { useState } from "react";

import { AddUser } from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";

function App() {
  let [usersList, setUsersList] = useState<
    { id: number; name: string; age: string }[]
  >([]);

  const handleAddUser = (name: string, age: string) => {
    setUsersList((previousState) => {
      return [...previousState, { id: Math.random(), name, age }];
    });
  };

  const handleRemoveUser = (userId: number) => {
    setUsersList(
      usersList.filter((user) => {
        return user.id !== userId;
      })
    );
  };

  return (
    <div className="App">
      <AddUser onChangeList={handleAddUser} />
      <UsersList usersList={usersList} onRemoveUser={handleRemoveUser} />
    </div>
  );
}

export default App;
