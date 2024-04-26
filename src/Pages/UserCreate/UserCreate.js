import { React, useState, useEffect } from 'react'
import { API_URL } from '../../Scripts/config'
import { getJson } from '../../Scripts/main_functions'
import { useNavigate } from 'react-router-dom'

function UserCreate({ id }) {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const nameHandler = e => setName(e.target.value)
    const usernameHandler = e => setUsername(e.target.value)
    const emailHandler = e => setEmail(e.target.value)

    useEffect(() => {

        const getUserData = async () => {
            const postRes = await getJson(API_URL + '/users?id=' + id)

            setName(postRes[0].name)
            setUsername(postRes[0].username)
            setEmail(postRes[0].email)
        }

        if (id) {
            getUserData()
        }

    }, [])

    const putHandler = async (event) => {
        event.preventDefault()

        const newUser = {
            name,
            username,
            email,
            address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                geo: {
                    lat: "",
                    lng: ""
                }
            },
            phone: "",
            website: "",
            company: {
                name: "",
                catchPhrase: "",
                bs: ""
            }
        }

        const res = await fetch(API_URL + '/users/' + id, {
            method: 'PUT',
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        setName('')
        setUsername('')
        setEmail('')

        navigate('/users')
    }

    const postHandler = async event => {
        event.preventDefault()

        const newUser = {
            name,
            username,
            email,
            address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                geo: {
                    lat: "",
                    lng: ""
                }
            },
            phone: "",
            website: "",
            company: {
                name: "",
                catchPhrase: "",
                bs: ""
            }
        }

        const res = await fetch(API_URL + '/users', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        setName('')
        setUsername('')
        setEmail('')

        navigate('/users')
    }

    return (
        <form onSubmit={id ? putHandler : postHandler}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' value={name} onChange={nameHandler}></input>
            </div>
            <div>
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' name='username' value={username} onChange={usernameHandler}></input>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type='text' id='email' name='email' value={email} onChange={emailHandler}></input>
            </div>
            <button type="submit">{id ? "Edit User" : "Create User"}</button>
        </form>
    )
}


export default UserCreate