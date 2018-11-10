import React from 'react'
import {connect} from 'react-redux'
import filtrator from '../selectors/filtrator'


const About = (props) => (
    <div>
    About
    {props.recipes.map((value ,index) => <p key = {value.id} >{value.title}</p>)}
    </div>
)





const mapStateToProps = (state) => {

    console.log(filtrator(state.recipes,state.filters))

    return {
        recipes:filtrator(state.recipes,state.filters)
           }
}
    



export default connect(mapStateToProps)(About)