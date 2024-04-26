import React from 'react'
import UserCreate from '../UserCreate/UserCreate'
import { useParams } from "react-router-dom";
import CategoryCreate from '../CategoryCreate/CategoryCreate';

function CategoryEdit() {

    const id = useParams().id

    return (
        <CategoryCreate id={id} />
    )
}

export default CategoryEdit