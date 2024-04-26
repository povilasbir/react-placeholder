import { React, useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { API_URL } from '../../Scripts/config';

function CommentCreate() {

    const navigate = useNavigate();

    const [postId, setPostId] = useState(useParams().id)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')

    const nameHandler = e => setName(e.target.value)
    const emailHandler = e => setEmail(e.target.value)
    const bodyHandler = e => setBody(e.target.value)

    const postHandler = async (event) => {
        event.preventDefault()

        const newComment = {
            postId,
            name,
            email,
            body
        }

        const res = await fetch(API_URL + '/comments', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        navigate('/posts/' + postId)
    }

    return (
        <main>
            {(<form id='post-wrap' onSubmit={postHandler}>
                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={name} onChange={nameHandler} />
                </div>

                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type='text' name="email" id="email" value={email} onChange={emailHandler}></input>
                </div>

                <div className='form-control'>
                    <label htmlFor="body">Body</label>
                    <textarea name="body" id="body" value={body} onChange={bodyHandler}></textarea>
                </div>

                <button type="submit">Add comment</button>
            </form>)}
        </main>
    )
}

export default CommentCreate