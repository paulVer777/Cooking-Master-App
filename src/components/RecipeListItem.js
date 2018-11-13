import React from 'react'
import {Link} from 'react-router-dom'

const RecipeListItem = (props) => (
    <div className = 'recipe-list-item'>
        <Link to = {`/editor/${props.recipeData.id}`} className = 'recipe-list-item__text'> {props.recipeData.title} </Link>
        <button onClick = {props.remove}>Remove</button>
    </div>
)

export default RecipeListItem