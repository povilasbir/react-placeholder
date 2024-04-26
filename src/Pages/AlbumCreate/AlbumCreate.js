import { React, useState, useEffect } from 'react'
import { API_URL } from '../../Scripts/config'

function AlbumCreate() {

    const [title, setTitle] = useState('')
    const [users, setUsers] = useState([])
    const [user, setUser] = useState('empty')

    const titleHandler = e => setTitle(e.target.value)
    const userHandler = event => setUser(event.target.value)

    useEffect(() => {

        const getUsers = async () => {
            const res = await fetch(API_URL + '/users')
            const usersData = await res.json()

            setUsers(usersData)
        }

        getUsers()

    }, [])

    const submitHandler = async event => {
        event.preventDefault()

        const newAlbum = {
            userId: user,
            title
        }

        const res = await fetch(API_URL + '/albums', {
            method: 'POST',
            body: JSON.stringify(newAlbum),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        setTitle('')
    }



    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='name'>Title:</label>
                <input type='text' id='name' name='name' value={title} onChange={titleHandler}></input>
            </div>
            <div className='form-control'>
                <label htmlFor="user">User</label>
                <select id="user" name="user" value={user} onChange={userHandler}>
                    <option value={''} disabled>---Select A User---</option>
                    {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                </select>
            </div>
            <button type="submit">"Create Album"</button>
        </form>
    )
}


export default AlbumCreate