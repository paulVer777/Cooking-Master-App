import React from 'react'
import moment from 'moment'

export default class Form extends React.Component {


constructor(props){
    super(props)
    this.state = {
        title:'',
        amount:0,
        instructions:'',
        difficulty: 'easy',
        createdAt:moment(),
        ingredients: []
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
        amount:this.state.amount,
        instructions:this.state.instructions,
        difficulty: this.state.difficulty,
        createdAt:this.state.createdAt,
        ingredients: this.state.ingredients
    })
}

render(){

    return (
        <div>
            <form onSubmit = {this.onSubmitHandler}>
                <input type = 'text' placeholder = 'title' onChange = {this.onInputHandler} autoFocus name = 'title'/>
                <input type = 'number' placeholder = 'preparation time' onChange = {this.onInputHandler} name = 'amount' />
                <textarea type = 'text' placeholder = 'instructions' onChange = {this.onInputHandler} name = 'instructions' />
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

