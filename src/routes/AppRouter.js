import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from '../components/Header'
import RecipeList from '../components/RecipeList'
import About from '../components/About'
import ErrorPage from '../components/ErrorPage'
import Form from '../components/Form'
import RecipeCreator from '../components/RecipeCreator';

const AppRouter = () => (
    
    <BrowserRouter>
     <div>
     <Header/>
     <Switch>
     <Route path = '/' component = {RecipeList} exact = {true} />
     <Route path = '/about' component = {About} />
     <Route path = '/form' component = {Form} />
     <Route path = '/creator' component = {RecipeCreator} />
     <Route component = {ErrorPage} />
     <Route />
     </Switch>
     </div>
    </BrowserRouter>
    
)

export default AppRouter