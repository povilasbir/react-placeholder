import React from 'react'

function PostsList({ posts }) {
    return (
        <>
            <div className="table-line title-line">
                <span className="user-list-span">
                    Post Title
                </span>
                <span className="user-list-span">
                    Post
                </span>
                <span className="user-list-span">
                    Total Comments
                </span>
            </div>
            {
                posts.map((item, index) => <a key={index} className='table-line' href={'./post?id=' + item.id}>
                    <span className='user-list-span'>{item.title}</span>
                    <span className='user-list-span'>{item.body}</span>
                    <span className='user-list-span'>{item.comments.length}</span>
                </a>)
            }
        </>
    )
}

export default PostsList