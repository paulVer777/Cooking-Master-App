import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import filtrator from '../selectors/filtrator'

const RecipeList = (props) => (
    <div className = 'recipe-list' >
    {props.recipes.map((value ,index) => <Link to = {`/editor/${value.id}`} key = {value.id} >{value.title}</Link>)}
    </div>
)


const mapStateToProps = (state) => (
           
    {
        recipes:filtrator(state.recipes,state.filters)
    } 
)

export default connect(mapStateToProps)(RecipeList)