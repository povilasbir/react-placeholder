import { React, useEffect, useState } from 'react'
import UserCreate from '../UserCreate/UserCreate'
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from '../../Scripts/config';
import { getJson } from '../../Scripts/main_functions';
import { Link } from 'react-router-dom';

function Category() {

    const navigate = useNavigate()

    const id = useParams().id
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')

    const deleteHandler = () => {
        const resp = fetch(API_URL + '/categories/' + id, {
            method: 'DELETE'
        })
        navigate('/categories')
    }

    useEffect(() => {

        const getCategory = async () => {
            console.log(API_URL + '/categories/' + id)
            const category = await getJson(API_URL + '/categories/' + id)

            setName(category.name)
            setDescription(category.description)
            setImg(category.image_url)
        }

        getCategory()
    }, [])

    return (
        <main>
            <Link to={'/categories/edit/' + id}>Edit</Link>
            <span className='user-list-span'>{name}</span>
            <span className='user-list-span'>{description}</span>
            <img src={img}></img>
            <button onClick={deleteHandler}>Delete</button>
        </main>
    )
}

export default Category