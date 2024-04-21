import React, { useState, useEffect } from 'react'
import { getJson } from '../../Scripts/main_functions.js'

function Albums() {

    const [albums, setAlbums] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function temp() {
            const albumsRes = await getJson('https://jsonplaceholder.typicode.com/albums')
            const usersRes = await getJson('https://jsonplaceholder.typicode.com/users')

            setAlbums(albumsRes)
            setUsers(usersRes)
        }

        temp()
    }, [])

    return (
        <main>
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