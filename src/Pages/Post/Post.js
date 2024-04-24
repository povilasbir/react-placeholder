import { React, useState, useEffect } from 'react'
import { getJson } from '../../Scripts/main_functions'
import { useSearchParams } from 'react-router-dom'
import { API_URL } from '../../Scripts/config'
import { Link, Route, Routes } from 'react-router-dom'

function Post() {

    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get("id")

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [user, setUser] = useState({})

    useEffect(() => {
        async function temp() {
            const postRes = await getJson(API_URL + '/posts?id=' + id)
            const commentsRes = await getJson(API_URL + '/comments')
            const userRes = await getJson(API_URL + '/users?id=' + postRes[0].userId)

            const postComments = commentsRes.filter(comment => {
                return comment.postId == id
            })

            setPost(postRes[0])
            setComments(postComments)
            setUser(userRes[0])

        }

        temp()
    }, [])

    return (
        <main>
            {(post && Object.keys(post).length > 0 && user && Object.keys(user).length > 0) && (<div id="post-wrap">
                <h3 id="post-title">{post.title} | Post has {comments.length} comments.</h3>
                <a id="post-username" href={'./user?id=' + user.id}>By: {user.username}</a>
                <p id="post-content">{post.body}</p>
                <a href={'./posts?id=' + user.id}>Other user posts</a>
                <Link to={'/posts/edit/' + post.id}> | Edit Post |</Link>
            </div>)}
            <h3 id="user-post-title">Post Comments</h3>
            <div className="users-wrap" id="user-posts-wrap">
                <div className="table-line title-line">
                    <span className="user-list-span">
                        Comment Title
                    </span>
                    <span className="user-list-span">
                        Comment
                    </span>
                    <span className="user-list-span">
                        Email
                    </span>
                </div>
                {(comments.length > 0 && user && Object.keys(user).length > 0) ?
                    (
                        comments.map((item, index) => <a key={index} className='table-line' href={'./user?id=' + user.id}>
                            <span className='user-list-span'>{item.name}</span>
                            <span className='user-list-span'>{item.body}</span>
                            <span className='user-list-span'>{item.email}</span>
                        </a>)
                    )
                    : (<h2>Loading...</h2>)}
            </div>
        </main>
    )
}

export default Post