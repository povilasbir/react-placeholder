import { React, useState, useEffect } from 'react'
import { getJson } from '../../Scripts/main_functions'
import { useSearchParams, Link } from 'react-router-dom'
import ImageGallery from "react-image-gallery";
import { API_URL } from '../../Scripts/config';

function Album() {

    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get("id")

    const [album, setAlbum] = useState({})

    const [photos, setPhotos] = useState([])
    const [imageArr, setImageArr] = useState([])

    const [user, setUser] = useState({})

    useEffect(() => {
        async function temp() {
            const albumRes = await getJson(API_URL + '/albums/?id=' + id)
            const photosRes = await getJson(API_URL + '/photos')
            const userRes = await getJson(API_URL + '/users/?id=' + albumRes.userId)

            const albumPhotos = photosRes.filter(photo => {
                return photo.albumId == id
            })

            const tempImgArr = albumPhotos.map(item => {
                const temp = {
                    original: item.url,
                    thumbnail: item.thumbnailUrl
                }

                return temp
            })

            setImageArr(tempImgArr)

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
                <Link id="post-username" to={'../user?id=' + user.id}>By: {user.username}</Link>
            </div>)}
            <Link to={'/albums/delete/' + id}> | Delete Album |</Link>
            <h3 id="user-post-title">Album Photos</h3>
            {imageArr.length > 0 && (
                <div className='gallery-container'>
                    <ImageGallery items={imageArr} />
                </div>
            )}
            {/* <div className="users-wrap" id="user-posts-wrap">
                <div className="table-line title-line">
                    <span className="user-list-span">
                        Title
                    </span>
                    <span className="user-list-span">
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
            </div> */}
        </main>
    )
}

export default Album