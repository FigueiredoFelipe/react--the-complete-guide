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
  const [enteredName, setEnteredName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const addUserHandler = (enteredData) => {

    setUsers((prevUsers) => {
      return [enteredData, ...prevUsers]
    })

  }

  const closeModalHandler = () => {
    setOpenModal(false)
  }

  return (
    <div>
      <UserForm onAddUser={addUserHandler} openModal={()=>{setOpenModal(true)}} enteredName={enteredName} setEnteredName={setEnteredName} enteredAge={enteredAge} setEnteredAge={setEnteredAge}/>
      <UserList listed={users} />
      <Modal isOpen={openModal} closeModal={closeModalHandler} feedBack={enteredName === '' ? 'name':'age'}/>
    </div>
  );
}

export default App;
