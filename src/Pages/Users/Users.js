import React, { useEffect, useState } from 'react'
import { getJson } from '../../Scripts/main_functions.js'
import { API_URL } from '../../Scripts/config.js'
import { Link, useParams, useSearchParams } from "react-router-dom"

function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function temp() {
            // const resp = await getJson('https://jsonplaceholder.typicode.com/users?_embed=posts')
            const resp = await getJson(API_URL + '/users?_embed=posts')
            setUsers(resp)
        }

        temp()
    }, [])

    return (
        <main>
            <Link className='wide-button' to='/users/create'>Create User</Link>
            <div className="users-wrap" id="users-wrap">
                <div className="table-line title-line">
                    <span className="user-list-span">
                        Full Name
                    </span>
                    <span className="user-list-span">
                        Username
                    </span>
                    <span className="user-list-span">
                        Total Posts
                    </span>
                </div>
                {users.length > 0 ?
                    (
                        users.map((item, index) => <a key={index} className='table-line' href={'./user?id=' + item.id}>
                            <span className='user-list-span'>{item.name}</span>
                            <span className='user-list-span'>{item.username}</span>
                            <span className='user-list-span'>{item.posts.length}</span>
                        </a>)
                    )
                    : (<h2>Loading...</h2>)}
            </div>
        </main>
    );
}

export default Users