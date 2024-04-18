import React, { useEffect, useState } from 'react'
import { getJson } from '../../Scripts/main_functions.js'

function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function temp() {
            const resp = await getJson('https://jsonplaceholder.typicode.com/users')
            setUsers(resp)
        }

        temp()
    }, [])

    return (
        <main>
            <div className="users-wrap" id="users-wrap">
                <div className="table-line title-line">
                    <span className="user-list-span">
                        Full Name
                    </span>
                    <span className="user-list-span">
                        Username
                    </span>
                </div>
                {users.length > 0 ?
                    (
                        users.map((item, index) => <a key={index} className='table-line' href={'./user.html?id=' + item.id}>
                            <span className='user-list-span'>{item.name}</span>
                            <span className='user-list-span'>{item.username}</span>
                        </a>)
                    )
                    : (<h2>Loading...</h2>)}
            </div>
        </main>
    );
}

export default Users