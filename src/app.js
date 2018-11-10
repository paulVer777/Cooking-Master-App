import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routes/AppRouter'
import getStore from './store/store'
import {Provider} from 'react-redux'
import { addRecipe, removeRecipe ,editRecipe} from './actions/expenseActions';


const store = getStore()

store.dispatch(addRecipe({title:'Lasagne',preparationTime:45, difficulty: 'medium'}))
store.dispatch(addRecipe({title:'Risotto',preparationTime:45, difficulty: 'easy'}))
const ret = store.dispatch(addRecipe({title:'Lasagne',preparationTime:45,difficulty:'medium'}))
store.dispatch(editRecipe(ret.recipe.id,{title:'Pizza'}))
store.dispatch(setDif)

console.log(store.getState())



const jsx = (
 <Provider store = {store} >
 <AppRouter/>
 </Provider>
)






ReactDOM.render( jsx, document.querySelector('#app'))

// app js is in charge of only bootstrap things that live else where

// launcher