import React from 'react'
import moment from 'moment'

export default class Form extends React.Component {

constructor(props){
    super(props)
    this.state = {
        title: props.recipe ? props.recipe.title : '',
        preparationTime:props.recipe ? props.recipe.preparationTime : '',
        instructions:props.recipe ? props.recipe.instructions : '',
        difficulty: props.recipe ? props.recipe.difficulty : 'easy',
        createdAt:props.recipe ? props.recipe.createdAt : moment(),
        ingredients: props.recipe ? props.recipe.ingredients : [],
        id:this.props.recipeId || this.props.recipe.id
    }
}

onInputHandler = (event) => {
    const data = event.target.value
    const propertyName = event.target.name

    this.setState((prevState) => ({[propertyName]:data}),() => console.log(this.state))
}

onSubmitHandler = (event) => {
    event.preventDefault()
    this.props.submitter({
        title:this.state.title,
        preparationTime:this.state.preparationTime,
        instructions:this.state.instructions,
        difficulty: this.state.difficulty,
        createdAt:this.state.createdAt,
        ingredients: this.state.ingredients,
        id:this.state.id
    })
}

onIngredientHandler = (ingredient) => {
    this.setState((prevState) => ({ingredients:[...prevState.ingredients,ingredient]}))
}

render(){
                
    return (
        <div>
            <form onSubmit = {this.onSubmitHandler}>
                <input type = 'text' placeholder = 'title' onChange = {this.onInputHandler} autoFocus name = 'title' value = {this.state.title}/>
                <input type = 'text' placeholder = 'preparation time' onChange = {this.onInputHandler} name = 'preparationTime' value = {this.state.preparationTime} />
                <textarea type = 'text' placeholder = 'instructions' onChange = {this.onInputHandler} name = 'instructions' value = {this.state.instructions} />
                <select onChange = {this.onInputHandler} name = 'difficulty'>
                <option value = 'easy'>Easy</option>
                <option value = 'Medium'>Medium</option>
                <option value = 'Hard'>Hard</option>
                </select>
                <button>Add</button>
            </form>
        </div>
    )

}

}

