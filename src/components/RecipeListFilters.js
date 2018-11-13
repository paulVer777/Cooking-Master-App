import React from 'react'
import {connect} from 'react-redux'
import { setText, setDifficulty } from '../actions/filtersActions';


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
onDifficultyLevelHandler = (event) => {
    const data = event.target.value
    this.props.dispatch(setDifficulty(data))
}

    render(){
        return(
            <div className = 'recipe-list-filters'>
                <input type = 'text' placeholder = 'search' onChange = {this.onSearchTextHandler} name = 'text'/>
                <select onChange = {this.onDifficultyLevelHandler}>
                    <option value = 'all'>All</option>
                    <option value = 'easy' >Easy</option>
                    <option value = 'medium'>Medium</option>
                    <option value = 'hard' >Hard</option>
                </select>
            </div>
        )
    }
}

export default connect()(RecipeListFilters)