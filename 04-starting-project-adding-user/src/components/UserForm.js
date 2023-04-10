import React from 'react';
import './UserForm.css';

const UserForm = (props) => {


    const inputUserNameHandler = (event) => {
        props.setEnteredName(event.target.value)
    }

    const inputUserAgeHandler = (event) => {
        props.setEnteredAge(parseInt(event.target.value))
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const userData = {
            key: Math.random().toString(36).substr(2, 7),
            name: props.enteredName,
            age: props.enteredAge
        }

        if (userData.name === '' || userData.age === "") {
            props.openModal()
            return
        }

        props.onAddUser(userData)
        props.setEnteredName('')
        props.setEnteredAge('')
    }


    return (
        <form className="UsersForm__" onSubmit={submitHandler}>
            <div className="UserForm__input">
                <label>Username:</label>
                <input
                    type="text"
                    onChange={inputUserNameHandler}
                    value={props.enteredName}
                />
                <label>Age (Years):</label>
                <input
                    type="number"
                    onChange={inputUserAgeHandler}
                    value={props.enteredAge}
                />
                <button type="submit">Add User</button>
            </div>
        </form>
    )

}

export default UserForm