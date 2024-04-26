import React from 'react'
import UserCreate from '../UserCreate/UserCreate'
import { useParams } from "react-router-dom";

function UserEdit() {

    const id = useParams().id

    return (
        <UserCreate id={id} />
    )
}

export default UserEdit