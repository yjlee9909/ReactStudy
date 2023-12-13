import "./App.css";
import React, { useState } from "react";
import Card from "./components/UI/Card/Card";
import AddUser from "./components/Users/AddUser/AddUser";
import Button from "./components/UI/Button/Button";
import UsersList from "./components/Users/UsersList/UsersList";

function App() {
  // 상태 끌어 올리기
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          age: uAge,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
