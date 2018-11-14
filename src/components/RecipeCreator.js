import React from 'react'
import {connect} from 'react-redux'
import Form from '../components/Form'
import FormIngredients from '../components/FormIngredients'
import  {addRecipe, addIngredient} from '../actions/expenseActions'

const RecipeCreator = (props) => (
    <div className = 'recipe-creator'>
    <h1>Recipe Creator</h1>
    <Form 
     
    submitter = {(dataFromForm) => {
    props.dispatch(addRecipe(dataFromForm))
     
    }}

    recipeId = {props.match.params.id}
    
    />
    <FormIngredients
    submitterIngredients = {(dataFromForm) => props.dispatch(addIngredient(props.match.params.id,dataFromForm))}
    />
    </div>
)

export default connect()(RecipeCreator)

