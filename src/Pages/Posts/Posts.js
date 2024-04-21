import React, { useEffect, useState } from 'react'
import { getJson } from '../../Scripts/main_functions.js'
import PostsList from '../../Components/PostsList/PostsList'
import { useParams, useSearchParams } from "react-router-dom"

function Posts() {

    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get("id")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function temp() {
            const resp = await getJson('https://jsonplaceholder.typicode.com/posts?_embed=comments')

            console.log(id)

            if (id) {
                const fltResp = resp.filter(item => item.userId == id)
                setPosts(fltResp)
            } else {
                setPosts(resp)
            }

        }

        temp()
    }, [])

    return (
        <main>
            <div className="users-wrap" id="users-wrap">
                {posts.length > 0 && (<PostsList posts={posts} />)}
            </div>
        </main>
    )
}

export default Posts