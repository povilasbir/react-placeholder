import React, { useEffect, useState } from 'react'
import { getJson } from '../../Scripts/main_functions.js'
import { API_URL } from '../../Scripts/config.js'
import { Link, useParams, useSearchParams } from "react-router-dom"

function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function temp() {
            const resp = await getJson(API_URL + '/categories')
            setCategories(resp)
        }

        temp()
    }, [])

    return (
        <main>
            <Link to='/categories/create'>Create a category</Link>
            {categories.length > 0 ? (
                categories.map((item, index) =>
                    <a href={'/categories/' + item.id} key={index}>
                        <span className='user-list-span'>{item.name}</span>
                        <span className='user-list-span'>{item.description}</span>
                        <img src={item.image_url}></img>
                    </a>
                )
            ) : <span>Loading...</span>}
        </main>
    )
}

export default Categories