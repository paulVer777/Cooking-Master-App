import React from 'react'
import { connect } from 'react-redux'
import IngredientsListItem from '../components/IngredientsListItem'
import {removeIngredient} from '../actions/expenseActions'

const IngredientList = (props) => (
    <div className = 'ingredients-list' >
        <h3> {!props.recipe ? 'Please fill fields above before start adding ingredients' : props.recipe.title } </h3>
    {
       !props.recipe || props.recipe.ingredients.map((value,index) => <IngredientsListItem ingredient = {value} key = {value.id} remove = {()=> props.dispatch(removeIngredient(props.recipeId,value.id))} />)
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