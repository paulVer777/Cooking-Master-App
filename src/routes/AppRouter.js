import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from '../components/Header'
import Dashboard from '../components/Dasboard'
import ErrorPage from '../components/ErrorPage'
import Form from '../components/Form'
import RecipeCreator from '../components/RecipeCreator';
import RecipeEditor from '../components/RecipeEditor'

const AppRouter = () => (
    
    <BrowserRouter>
     <div>
     <Header/>
     <Switch>
     <Route path = '/' component = {Dashboard} exact = {true} />
     <Route path = '/form' component = {Form} />
     <Route path = '/creator' component = {RecipeCreator} />
     <Route path = '/editor/:id' component = {RecipeEditor} />
     <Route component = {ErrorPage} />
     <Route />
     </Switch>
     </div>
    </BrowserRouter>
    
)

export default AppRouter