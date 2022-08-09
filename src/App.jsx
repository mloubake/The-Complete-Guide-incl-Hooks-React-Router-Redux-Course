import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";

function App() {
  let [usersList, setUsersList] = useState([]);

  const handleAddUser = (username, age) => {
    setUsersList((previousState) => {
      return [
        ...previousState,
        { id: Math.random().toString(), name: username, age: age },
      ];
    });
  };

  const handleRemoveUser = (userId) => {
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
