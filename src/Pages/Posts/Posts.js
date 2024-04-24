import React, { useEffect, useState } from 'react'
import { getJson } from '../../Scripts/main_functions.js'
import PostsList from '../../Components/PostsList/PostsList'
import { Link, useParams, useSearchParams } from "react-router-dom"
import { API_URL } from '../../Scripts/config.js'

function Posts() {

    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get("id")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function temp() {
            // const resp = await getJson('https://jsonplaceholder.typicode.com/posts?_embed=comments')
            const resPosts = await getJson(API_URL + '/posts?_embed=comments')

            let filteredPosts = []

            if (id) {
                filteredPosts = resPosts.filter(item => item.userId == id)
            } else {
                filteredPosts = resPosts
            }

            setPosts(filteredPosts)

        }

        temp()
    }, [])

    return (
        <main>
            <Link className='wide-button' to='/posts/create'>Create Post</Link>
            <div className="users-wrap" id="users-wrap">
                {posts.length > 0 && (<PostsList posts={posts} />)}
            </div>
        </main >
    )
}

export default Posts