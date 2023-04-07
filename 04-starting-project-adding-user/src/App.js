import React, { useState } from 'react';
import UserForm from './components/UserForm'
import UserList from './components/UserList'

const INITIAL_USERS = [
  {
    key: Math.random().toString(36).substr(2, 7),
    name: 'Alan',
    age: 31
  },
  {
    key: Math.random().toString(36).substr(2, 7),
    name: 'Max',
    age: 31
  },
  {
    key: Math.random().toString(36).substr(2, 7),
    name: 'Meg',
    age: 21
  },
]

const App = () => {

  const [users, setUsers] = useState(INITIAL_USERS)

  const addUserHandler = (enteredData) => {
    setUsers((prevUsers) => {
      return [enteredData, ...prevUsers]
    })
  }

  console.log(users);

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UserList listed={users} />
    </div>
  );
}

export default App;
