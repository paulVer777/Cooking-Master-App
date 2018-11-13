import React from 'react'
import {connect} from 'react-redux'
import { setText } from '../actions/filtersActions';


class RecipeListFilters extends React.Component {

constructor(props){
    super(props)
    this.state = {
        text:''
    }
}

onSearchTextHandler = (event) => {

    const data = event.target.value
    this.setState((prevState) => ({text:data }),() => this.props.dispatch(setText(this.state.text)))
    
}


    render(){
        return(
            <div className = 'recipe-list-filters'>
                <input type = 'text' placeholder = 'search' onChange = {this.onSearchTextHandler} name = 'text'/>
            </div>
        )
    }
}

export default connect()(RecipeListFilters)