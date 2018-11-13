import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import filtrator from '../selectors/filtrator'
import RecipeListItem from '../components/RecipeListItem'

const RecipeList = (props) => (
    <div className = 'recipe-list' >
    {props.recipes.map((value ,index) => <RecipeListItem recipeData = {value} key = {value.id} />)}
    </div>
)

const mapStateToProps = (state) => (
           
    {
        recipes:filtrator(state.recipes,state.filters)
    } 
)

export default connect(mapStateToProps)(RecipeList)