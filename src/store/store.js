import {createStore,combineReducers} from 'redux'
import recipesReducer from '../reducers/recipes-reducer'

const getStore = () => {

    return createStore(combineReducers(
         {
             recipes:recipesReducer
         }
     ))
 }

export default getStore