import React from 'react'
import PostCreate from '../PostCreate/PostCreate'
import { useParams } from "react-router-dom";

function PostEdit() {

    const id = useParams().id

    return (
        <PostCreate id={id} />
    )
}

export default PostEdit