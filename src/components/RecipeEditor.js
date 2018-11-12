import React from 'react'
import { connect } from 'react-redux'
import Form from '../components/Form'

const RecipeCreator = (props) => (
    <div>
        <h1>Edit</h1>
        <Form recipe = {props.recipe}/>
    </div>
)

const mapStateToProps = (state,props) => (
    {
        recipe:state.recipes.find((value,index) => value.id === props.match.params.id)
    }
)

export default connect(mapStateToProps)(RecipeCreator)