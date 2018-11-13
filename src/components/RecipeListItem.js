import React from 'react'
import {Link} from 'react-router-dom'

const RecipeListItem = (props) => (
    <div>
    <Link to = {`/editor/${props.recipeData.id}`} >{props.recipeData.title}</Link>
    <button>Remove</button>
    </div>
)

export default RecipeListItem