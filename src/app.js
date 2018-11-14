import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routes/AppRouter'
import getStore from './store/store'
import {Provider} from 'react-redux'
import { addRecipe, removeRecipe ,editRecipe} from './actions/expenseActions';
import { setDifficulty, setText } from './actions/filtersActions';


const store = getStore()

store.dispatch(addRecipe({title:'Lasagne',preparationTime:45, difficulty: 'medium',id:'qwerty'}))
store.dispatch(addRecipe({title:'Pizaa',preparationTime:45, difficulty: 'medium',id:'qwerty2'}))


const addIngredient = (id,ingredient) => (
    {
        type:'ADD_INGREDIENT',
        id,
        ingredient
    }
)

const removeIngredient = (recipeId, ingredientId) => (
    {
        type:'REMOVE_INGREDIENT',
        recipeId,
        ingredientId
    }
)


store.dispatch(addIngredient('qwerty',{id:'qwertyzxx',title:'cheese'}))
store.dispatch(addIngredient('qwerty',{id:'qwertyzxczxc',title:'butter'}))
store.dispatch(removeIngredient('qwerty', 'qwertyzxx'))

console.log(store.getState())

const jsx = (
 <Provider store = {store} >
 <AppRouter/>
 </Provider>
)






ReactDOM.render( jsx, document.querySelector('#app'))

// app js is in charge of only bootstrap things that live else where

// launcher