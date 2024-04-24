import React from 'react'
import Users from '../Users/Users';
import Posts from '../Posts/Posts';
import Albums from '../Albums/Albums';

import SearchLine from '../../Components/SearchLine/SearchLine';

function Main() {
    return (
        <main>
            <SearchLine />
            <div className='main-page-half-wrap'>
                <Posts />
                <div>
                    <Users />
                    <Albums />
                </div>
            </div>
        </main>
    )
}

export default Main