import { API_URL } from '../../Scripts/config'
import { Link, Route, Routes } from 'react-router-dom'
import { useParams } from "react-router-dom";

function AlbumDelete() {
    const id = useParams().id

    console.log(API_URL + '/albums/' + id)

    const res = fetch(API_URL + '/albums/' + id, {
        method: 'DELETE',
    })

    return (
        <>
            <div>
                {res ? "Album deleted" : "Deleting album"}
            </div>
            <Link to='/albums'>Back to other albums</Link>
        </>
    )
}

export default AlbumDelete