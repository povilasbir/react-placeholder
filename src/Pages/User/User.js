import { React, useState, useEffect } from 'react'
import { getJson } from '../../Scripts/main_functions'
import { useSearchParams } from 'react-router-dom'
import profile from '../../Images/profile.webp'

function User() {

    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get("id")

    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function temp() {
            const userRes = await getJson('https://jsonplaceholder.typicode.com/users/' + id)
            const postsRes = await getJson('https://jsonplaceholder.typicode.com/posts')

            const userPosts = postsRes.filter(post => {
                return post.userId == id
            })

            setUser(userRes)
            setPosts(userPosts)
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
                    <div className="address-wrap">
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
                    </div>
                </div>)}
                <img src={profile} alt="Profile Image" className="profile-img" />
            </div>
            <div className="users-wrap" id="user-posts-wrap">
                <div className="table-line title-line">
                    <span className="user-list-span">
                        Post Title
                    </span>
                    <span className="user-list-span">
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

export default User