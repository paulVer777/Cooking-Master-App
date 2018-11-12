import React from 'react'
import {connect} from 'react-redux'
import Form from '../components/Form'
import  {addRecipe} from '../actions/expenseActions'

const RecipeCreator = (props) => (
    <div>
    <h1>Recipe Creator</h1>
    <Form submitter = {(dataFromForm) => {

    props.dispatch(addRecipe(dataFromForm))
    props.history.push('/about')    

    }}/>
    </div>
)

export default connect()(RecipeCreator)

