import { React, useState, useEffect } from 'react'
import { getJson } from '../../Scripts/main_functions'
import { useSearchParams } from 'react-router-dom'
import profile from '../../Images/profile.webp'
import PostsList from '../../Components/PostsList/PostsList'

function User() {

    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get("id")

    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        async function temp() {
            const userRes = await getJson('https://jsonplaceholder.typicode.com/users/' + id)
            const postsRes = await getJson('https://jsonplaceholder.typicode.com/posts?_embed=comments')
            const albumsRes = await getJson('https://jsonplaceholder.typicode.com/albums')

            const userPosts = postsRes.filter(post => {
                return post.userId == id
            })

            const userAlbums = albumsRes.filter(album => {
                return album.userId == id
            })

            setUser(userRes)
            setPosts(userPosts)
            setAlbums(userAlbums)
        }

        temp()
    }, [])

    return (
        <main>
            <div id="user-card-wrap">
                {Object.keys(user).length > 0 && (<div>
                    <h2 className="user-info-title">User Information</h2>
                    <h3 className="username" id="username">Username: {user.username}</h3>
                    <h4 className="secondary-info" id="full-name">Full Name: {user.name} | Has {posts.length} total posts.</h4>
                    <h4 className="secondary-info" id="email">Email: {user.email}</h4>
                    <h5 className="address-title">Address Information:</h5>
                    <a href={`https://www.google.com/maps/place/${user.address.geo.lat},${user.address.geo.lng}`} className="address-wrap">
                        <span className="address-secondary" id="street">
                            Street: {user.address.street}
                        </span>
                        <span className="address-secondary" id="suite">
                            Suite: {user.address.suite}
                        </span>
                        <span className="address-secondary" id="city">
                            City: {user.address.city}
                        </span>
                        <span className="address-secondary" id="zipcode">
                            Zip Code: {user.address.zipcode}
                        </span>
                        <div className="geo-data">
                            <span className="latlng" id="lat">
                                Latitude: {user.address.geo.lat}
                            </span>
                            <span className="lnglng" id="lng">
                                Longitude: {user.address.geo.lng}
                            </span>
                        </div>
                    </a>
                    <div>
                        <ul>
                            <li>
                                Phone number: {user.phone}
                            </li>
                            <li>
                                Website: {user.website}
                            </li>
                            <li>
                                Company name: {user.company.name}
                            </li>
                        </ul>
                    </div>
                </div>)}
                <img src={profile} alt="Profile Image" className="profile-img" />
            </div>
            <div className="users-wrap" id="user-posts-wrap">
                {posts.length > 0 && (<PostsList posts={posts} />)}
            </div>

            <div className="users-wrap" id="user-posts-wrap">
                <div className="table-line title-line">
                    <span className="user-list-span">
                        Album Title
                    </span>
                </div>
                {albums.length > 0 ?
                    (
                        albums.map((item, index) => <a key={index} className='table-line' href={'./album?id=' + item.id}>
                            <span className='user-list-span'>{item.title}</span>
                        </a>)
                    )
                    : (<h2>Loading...</h2>)}
            </div>

        </main>
    )
}

export default User