import { React, useState, useEffect } from 'react'
import { getJson } from '../../Scripts/main_functions'
import { useSearchParams } from 'react-router-dom'

function Album() {

    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get("id")

    const [album, setAlbum] = useState({})
    const [photos, setPhotos] = useState([])
    const [user, setUser] = useState({})

    useEffect(() => {
        async function temp() {
            const albumRes = await getJson('https://jsonplaceholder.typicode.com/albums/' + id)
            const photosRes = await getJson('https://jsonplaceholder.typicode.com/photos')
            const userRes = await getJson('https://jsonplaceholder.typicode.com/users/' + albumRes.userId)

            const albumPhotos = photosRes.filter(photo => {
                return photo.albumId == id
            })

            setAlbum(albumRes)
            setPhotos(albumPhotos)
            setUser(userRes)
        }

        temp()
    }, [])

    return (
        <main>
            {(Object.keys(album).length > 0 && Object.keys(user).length > 0) && (<div id="post-wrap">
                <h3 id="post-title">{album.title} | Album has {photos.length} photos.</h3>
                <a id="post-username" href={'./user.html?id=' + user.id}>By: {user.username}</a>
            </div>)}
            <h3 id="user-post-title">Album Photos</h3>
            <div class="users-wrap" id="user-posts-wrap">
                <div class="table-line title-line">
                    <span class="user-list-span">
                        Title
                    </span>
                    <span class="user-list-span">
                        Photo
                    </span>
                </div>
                {photos.length > 0 ?
                    (
                        photos.map((item, index) => <a key={index} className='table-line'>
                            <span className='user-list-span'>{item.title}</span>
                            <img src={item.thumbnailUrl}></img>
                        </a>)
                    )
                    : (<h2>Loading...</h2>)}
            </div>
        </main>
    )
}

export default Album