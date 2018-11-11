import React from 'react'

export default class Form extends React.Component {


constructor(props){
    super(props)
    this.state = {
        title:'',
        amount:0,
        difficulty: 'easy'
    }
}

onInputHandler = (event) => {
    const data = event.target.value
    const propertyName = event.target.name

    this.setState((prevState) => ({[propertyName]:data}),() => console.log(this.state))
}

render(){

    return (
        <div>
            <form>
                <input type = 'text' placeholder = 'title' onChange = {this.onInputHandler} autoFocus name = 'title'/>
                <input type = 'number' placeholder = 'preparation time' onChange = {this.onInputHandler} name = 'amount' />
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

