import React, { useState } from 'react'
import { API_URL } from '../../Scripts/config'
import { useNavigate } from 'react-router-dom'

function Comment({ item }) {

    const navigate = useNavigate()

    const [editMode, setEditMode] = useState(false)

    const [name, setName] = useState(item.name)
    const [email, setEmail] = useState(item.email)
    const [body, setBody] = useState(item.body)

    const nameHandler = e => setName(e.target.value)
    const emailHandler = e => setEmail(e.target.value)
    const bodyHandler = e => setBody(e.target.value)

    const editCommentHandler = event => {
        setEditMode(true)
    }

    const submitHandler = async event => {
        event.preventDefault()

        const newComment = {
            postId: item.postId,
            name,
            email,
            body
        }

        const res = await fetch(API_URL + '/comments/' + item.id, {
            method: 'PUT',
            body: JSON.stringify(newComment),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        // setName(name)
        // setBody(body)
        // setEmail(email)

        setEditMode(false)
    }

    return (
        <>
            {
                editMode ? (
                    <form onSubmit={submitHandler}>
                        <input type="text" name="name" id="name" value={name} onChange={nameHandler} />
                        <textarea name="body" id="body" value={body} onChange={bodyHandler}></textarea>
                        <input type='text' name="email" id="email" value={email} onChange={emailHandler}></input>
                        <button type='submit'>Done</button>
                    </form>
                ) : (
                    <div className='table-line'>
                        <span className='user-list-span'>{name}</span>
                        <span className='user-list-span'>{body}</span>
                        <span className='user-list-span'>{email}</span>
                        <button onClick={editCommentHandler}>*</button>
                    </div>
                )
            }
        </>

    )
}

export default Comment