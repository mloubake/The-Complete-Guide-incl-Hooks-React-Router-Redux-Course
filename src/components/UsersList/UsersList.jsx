import React from "react";

import classes from "./styles.module.css";

function UsersList({ usersList, onRemoveUser }) {
  return (
    <div className={classes.container}>
      {usersList <= 0 && <h3>No Records</h3>}
      {usersList.length > 0 && (
        <ul>
          {usersList.map((user) => (
            <li key={user.id}>
              {user.name} {user.age}{" "}
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
}

export default UsersList;
