import config from '../config';

import React, { Component } from 'react';
import reqwest from 'reqwest';

import Recipe from './Recipe';
import Authentication from '../src/Authentication';

export default class RecipeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    }

    componentDidMount() {
        reqwest({
            url: config.api.url + '/recipes',
            headers: {
                'Authorization': 'Bearer ' + Authentication.getAccessToken()
            }
        }).then((recipes) => {
            this.setState({
                recipes: recipes
            });
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.recipes.map(function (recipe) {
                        return <Recipe
                            key={recipe.id}
                            title={recipe.title}
                            description={recipe.description}
                            image={recipe.image}>
                        </Recipe>
                    })
                }
            </div>
        );
    }
}
