import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from '../components/Header'
import RecipeList from '../components/RecipeList'
import About from '../components/About'
import ErrorPage from '../components/ErrorPage'


const AppRouter = () => (
    
    <BrowserRouter>
     <div>
     <Header/>
     <Switch>
     <Route path = '/' component = {RecipeList} exact = {true} />
     <Route path = '/about' component = {About} />
     <Route component = {ErrorPage} />
     <Route />
     </Switch>
     </div>
    </BrowserRouter>
    
)

export default AppRouter