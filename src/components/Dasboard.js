import React from 'react'
import RecipeListFilters from './RecipeListFilters';
import RecipeList from './RecipeList';


const Dashboard = (props) => (
    <div className = 'dashboard'>
    <h1>Dashboard</h1>
    <RecipeListFilters/>
    <RecipeList/>
    </div>
)

export default Dashboard

