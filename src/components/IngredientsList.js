import React from 'react'
import { connect } from 'react-redux'
import IngredientsListItem from '../components/IngredientsListItem'

const IngredientList = (props) => (
    <div className = 'ingredients-list' >
        <h3>Ingredients List</h3>
    {
       !props.recipe || props.recipe.ingredients.map((value,index) => <IngredientsListItem ingredient = {value} key = {value.id} />)
    }
    </div>
)

const mapStateToProps = (state,props) => {
      
    return (
    {
        recipe:state.recipes.find((value,index) => value.id === props.recipeId)
    }
)

}

export default connect(mapStateToProps)(IngredientList)