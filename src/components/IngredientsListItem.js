import React from 'react'

const IngredientsListItem = (props) => (
    <div className = 'ingredients-list-item'>
    <span>{props.ingredient.title}</span>
    <button onClick = { props.remove }>Remove</button>
    </div>
) 

export default IngredientsListItem