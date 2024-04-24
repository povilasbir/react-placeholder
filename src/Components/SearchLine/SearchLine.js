import React from 'react'

function SearchLine() {
    return (
        <form name='section' id='search'>
            <select className='search-select'>
                <option value='users'>
                    Users
                </option>
                <option value='posts'>
                    Posts
                </option>
                <option value='albums'>
                    Albums
                </option>
            </select>
            <input type='text' id='search-text' name='search-text' placeholder='Search text'></input>
        </form>
    )
}

export default SearchLine