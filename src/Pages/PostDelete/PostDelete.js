import { API_URL } from '../../Scripts/config'
import { Link, Route, Routes } from 'react-router-dom'
import { useParams } from "react-router-dom";

function PostDelete() {
    const id = useParams().id

    const res = fetch(API_URL + '/posts/' + id, {
        method: 'DELETE',
    })

    return (
        <>
            <div>
                {res ? "Post deleted" : "Deleting post"}
            </div>
            <Link to='/posts'>Back to other posts</Link>
        </>
    )
}

export default PostDelete