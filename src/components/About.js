import React from 'react'
import {connect} from 'react-redux'



const About = (props) => (
    <div>
    About
    {console.log(props.recipes)}
    </div>
)


const mapStateToProps = (state) => (
    {
     recipes:state.recipes
    }
)


export default connect(mapStateToProps)(About)