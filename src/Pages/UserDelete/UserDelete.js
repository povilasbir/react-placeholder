import { API_URL } from '../../Scripts/config'
import { Link, Route, Routes } from 'react-router-dom'
import { useParams } from "react-router-dom";

function UserDelete() {
    const id = useParams().id

    const res = fetch(API_URL + '/users/' + id, {
        method: 'DELETE',
    })

    return (
        <>
            <div>
                {res ? "User deleted" : "Deleting user"}
            </div>
            <Link to='/users'>Back to other users</Link>
        </>
    )
}

export default UserDelete