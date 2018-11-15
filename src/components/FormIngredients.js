import React from 'react'
import uuidv4 from 'uuid'

class FormIngredients extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text:''
        }
    }

    onInputHandler = (event) => {
        const data = event.target.value
        this.setState((prevState) => ({text:data}))
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        this.props.submitterIngredients({title:this.state.text,id:uuidv4()})
        event.target.elements.title.value = ''
    }

    render(){
        return (
            <div className = 'form-ingredients'>
                <form onSubmit = {this.onSubmitHandler} >
                <input type = 'text' onChange = {this.onInputHandler} name = 'title' />
                <button>Add Ingredient</button>
                </form>
            </div>
        )
    }
}



export default FormIngredients