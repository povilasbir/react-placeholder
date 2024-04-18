import React, { useEffect, useState } from 'react'
import { getJson } from '../../Scripts/main_functions.js'

function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function temp() {
            const resp = await getJson('https://jsonplaceholder.typicode.com/posts')
            setPosts(resp)
        }

        temp()
    }, [])

    return (
        <main>
            <div class="users-wrap" id="users-wrap">
                <div class="table-line title-line">
                    <span class="user-list-span">
                        Post Title
                    </span>
                    <span class="user-list-span">
                        Post
                    </span>
                </div>
                {posts.length > 0 ?
                    (
                        posts.map((item, index) => <a key={index} className='table-line' href={'./post.html?id=' + item.id}>
                            <span className='user-list-span'>{item.title}</span>
                            <span className='user-list-span'>{item.body}</span>
                        </a>)
                    )
                    : (<h2>Loading...</h2>)}
            </div>
        </main>
    )
}

export default Posts