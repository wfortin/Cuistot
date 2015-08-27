import React from 'react'
import { Route } from 'react-router'
import App from './App'
import RecipeList from './RecipeList'
import AddRecipe from './AddRecipe'

export default (
    <Route component={App}>
        <Route path="/" component={RecipeList} />
        <Route path="/add" component={AddRecipe} />
    </Route>
)
