import {createStore,combineReducers} from 'redux'
import recipesReducer from '../reducers/recipes-reducer'
import filtersReducer from '../reducers/filters-reducer'

const getStore = () => {

    return createStore(combineReducers(
         {
             recipes:recipesReducer,
             filters:filtersReducer
         }
     ))
 }

export default getStore