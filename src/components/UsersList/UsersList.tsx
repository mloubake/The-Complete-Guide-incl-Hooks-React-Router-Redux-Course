import React from "react";

import classes from "./styles.module.css";

interface IProps {
  usersList: { id: number; name: string; age: string }[];
  onRemoveUser: (id: number) => void;
}

const UsersList: React.FC<IProps> = ({ usersList, onRemoveUser }) => {
  return (
    <div className={classes.container}>
      {usersList.length <= 0 && <h3>No Records</h3>}
      {usersList.length > 0 && (
        <ul>
          {usersList.map((user) => (
            <li key={user.id}>
              {user.name} {user.age}
              <span
                onClick={() => {
                  onRemoveUser(user.id);
                }}
              >
                X
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
