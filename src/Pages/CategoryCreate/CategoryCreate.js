import { React, useState, useEffect } from 'react'
import { API_URL } from '../../Scripts/config'
import { getJson } from '../../Scripts/main_functions'
import { useNavigate } from 'react-router-dom'

function CategoryCreate({ id }) {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')

    const nameHandler = e => setName(e.target.value)
    const descriptionHandler = e => setDescription(e.target.value)
    const imgHandler = e => setImg(e.target.value)

    useEffect(() => {

        const getCatData = async () => {
            const res = await getJson(API_URL + '/categories/' + id)

            setName(res.name)
            setDescription(res.description)
            setImg(res.image_url)
        }

        if (id) {
            getCatData()
        }

    }, [])

    const postHandler = async event => {
        event.preventDefault()

        const newCategory = {
            name,
            description,
            image_url: img
        }
        const res = await fetch(API_URL + '/categories', {
            method: 'POST',
            body: JSON.stringify(newCategory),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        navigate('/categories')
    }

    const putHandler = async (event) => {
        event.preventDefault()

        const newCategory = {
            id,
            name,
            description,
            image_url: img
        }

        const res = await fetch(API_URL + '/categories/' + id, {
            method: 'PUT',
            body: JSON.stringify(newCategory),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        setName('')
        setDescription('')
        setImg('')

        navigate('/categories')
    }

    return (
        <form onSubmit={id ? putHandler : postHandler}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' value={name} onChange={nameHandler}></input>
            </div>
            <div>
                <label htmlFor='description'>Description:</label>
                <input type='text' id='description' name='description' value={description} onChange={descriptionHandler}></input>
            </div>
            <div>
                <label htmlFor='image'>Image:</label>
                <input type='text' id='image' name='image' value={img} onChange={imgHandler}></input>
            </div>
            <button type="submit">{id ? "Done" : "Add"}</button>
        </form>
    )
}

export default CategoryCreate