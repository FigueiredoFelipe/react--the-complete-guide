import React, { useState } from 'react';
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import Modal from './components/modal';

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
  const [openModal, setOpenModal] = useState(false)

  const addUserHandler = (enteredData) => {

    if (enteredData.name === '') {
      setOpenModal(true)
      return
    }

    if (enteredData.age === "") {
      setOpenModal(true)
      return
    }

    setUsers((prevUsers) => {
      return [enteredData, ...prevUsers]
    })


  }

  const closeModalHandler = () => {
    setOpenModal(false)
  }

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UserList listed={users} />
      <Modal isOpen={openModal} closeModal={closeModalHandler} />
    </div>
  );
}

export default App;
