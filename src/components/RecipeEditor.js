import React from 'react'
import { connect } from 'react-redux'
import Form from '../components/Form'
import { editRecipe } from '../actions/expenseActions';


const RecipeEditor = (props) => (
    <div>
        <h1>Edit</h1>
        <Form 
        recipe = {props.recipe}
        submitter = {(obj) => props.dispatch(editRecipe(props.recipe.id,obj))}
        />    
    </div>
)

const mapStateToProps = (state,props) => (
    {
        recipe:state.recipes.find((value,index) => value.id === props.match.params.id)
    }
)

export default connect(mapStateToProps)(RecipeEditor)