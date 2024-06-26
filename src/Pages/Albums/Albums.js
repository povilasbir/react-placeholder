import React, { useState, useEffect } from 'react'
import { getJson } from '../../Scripts/main_functions.js'
import { API_URL } from '../../Scripts/config.js'
import { Link, useParams, useSearchParams } from "react-router-dom"


function Albums() {

    const [albums, setAlbums] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function temp() {
            // const albumsRes = await getJson('https://jsonplaceholder.typicode.com/albums')
            // const usersRes = await getJson('https://jsonplaceholder.typicode.com/users')

            const albumsRes = await getJson('http://localhost:3000/albums')
            const usersRes = await getJson('http://localhost:3000/users')

            setAlbums(albumsRes)
            setUsers(usersRes)
        }

        temp()
    }, [])

    return (
        <main>
            <Link className='wide-button' to='/albums/create'>Create Album</Link>
            <div className="users-wrap" id="users-wrap">
                <div className="table-line title-line">
                    <span className="user-list-span">
                        Album Title
                    </span>
                    <span className="user-list-span">
                        Author
                    </span>
                </div>
                {albums.length > 0 ?
                    (
                        albums.map((item, index) => <a key={index} className='table-line' href={'./album?id=' + item.id}>
                            <span className='user-list-span'>{item.title}</span>
                            <span className='user-list-span'>{users.find(user => user.id == item.userId).name}</span>
                        </a>)
                    )
                    : (<h2>Loading...</h2>)}
            </div>
        </main>
    )
}

export default Albums