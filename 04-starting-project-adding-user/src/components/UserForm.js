import React, { useState } from "react";
import './UserForm.css';

const UserForm = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const inputUserNameHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const inputUserAgeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const userData = {
            key: Math.random().toString(36).substr(2, 7),
            name: enteredName,
            age: enteredAge
        }
        props.onAddUser(userData)
        setEnteredName('')
        setEnteredAge('')
    }


    return (
        <form className="UsersForm__" onSubmit={submitHandler}>
            <div className="UserForm__input">
                <label>Username:</label>
                <input
                    type="text"
                    onChange={inputUserNameHandler}
                    value={enteredName}
                />
                <label>Age (Years):</label>
                <input
                    type="number"
                    onChange={inputUserAgeHandler}
                    value={enteredAge}
                />
                <button type="submit">Add User</button>
            </div>
        </form>
    )

}

export default UserForm