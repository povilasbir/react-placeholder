import React from 'react'
import { NavLink } from 'react-router-dom'

function StickyMenu() {
    return (
        <div id="sticky-menu">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts">Posts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/albums">Albums</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default StickyMenu