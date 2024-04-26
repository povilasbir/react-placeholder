import { React, useState, useEffect } from 'react'
import { getJson } from '../../Scripts/main_functions'
import { API_URL } from '../../Scripts/config'

function PostCreate({ id }) {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [user, setUser] = useState('empty')

    const [users, setUsers] = useState([])

    useEffect(() => {

        const getPost = async () => {
            const postRes = await getJson(API_URL + '/posts?id=' + id)

            setTitle(postRes[0].title)
            setBody(postRes[0].body)
            setUser(postRes[0].userId)
        }

        const getUsers = async () => {
            const res = await fetch(API_URL + '/users')
            const usersData = await res.json()

            setUsers(usersData)
        }

        getUsers()

        if (id) {
            getPost()
        }

    }, [])

    const titleHandler = event => setTitle(event.target.value)
    const bodyHandler = event => setBody(event.target.value)
    const userHandler = event => setUser(event.target.value)

    const putHandler = async (event) => {
        event.preventDefault()

        const newPost = {
            title,
            body,
            userId: user
        }

        const res = await fetch(API_URL + '/posts/' + id, {
            method: 'PUT',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        setTitle('')
        setBody('')
        setUser('empty')
    }

    const postHandler = async (event) => {
        event.preventDefault()

        const newPost = {
            title,
            body,
            userId: user
        }

        const res = await fetch(API_URL + '/posts', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        const createdPost = await res.json()

        console.log(createdPost)

        setTitle('')
        setBody('')
        setUser('empty')
    }

    return (
        <main>
            {(<form id='post-wrap' onSubmit={id ? putHandler : postHandler}>
                <div className='form-control'>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={title} onChange={titleHandler} />
                </div>

                <div className='form-control'>
                    <label htmlFor="body">Content</label>
                    <textarea name="body" id="body" value={body} onChange={bodyHandler}></textarea>
                </div>

                <div className='form-control'>
                    <label htmlFor="user">User</label>
                    <select id="user" name="user" value={user} onChange={userHandler}>
                        <option value={''} disabled>---Select A User---</option>
                        {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                    </select>
                </div>

                <button type="submit">{id ? "Edit Post" : "Create Post"}</button>
            </form>)}
        </main>
    )
}

export default PostCreate