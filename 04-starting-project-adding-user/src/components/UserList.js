import React from "react";
import './UserList.css'

const UserList = (props) => {

    return (
        <ul className="UsersList__">
            {props.listed.map((user) => (
                <li key={user.key}>{`${user.name} `}({user.age} years old)</li>
            )
            )}
        </ul>
    )
}

export default UserList