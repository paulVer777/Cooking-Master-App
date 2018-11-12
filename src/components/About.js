import React from 'react'
import {connect} from 'react-redux'
import filtrator from '../selectors/filtrator'
import {Link} from 'react-router-dom'

const About = (props) => (
    <div>
    About
    {props.recipes.map((value ,index) => <Link to = {`/editor/${value.id}`} key = {value.id} >{value.title}</Link>)}
    </div>
)



const mapStateToProps = (state) => {

    console.log(filtrator(state.recipes,state.filters))

    return {
        recipes:filtrator(state.recipes,state.filters)
           }
}
    



export default connect(mapStateToProps)(About)