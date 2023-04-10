import React from "react";
import classes from './UserList.module.css'

const UserList = (props) => {

    return (
        <ul className={classes.UsersList__}>
            {props.listed.map(user => (
                <li key={user.key}>{`${user.name} `}({user.age} years old)</li>
            ))}
        </ul>
    )
}

export default UserList