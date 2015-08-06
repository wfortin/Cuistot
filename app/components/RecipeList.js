import config from '../config';

import React, { Component } from 'react';
import Recipe from './Recipe';
import reqwest from 'reqwest';

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
                'Authorization': 'Bearer ya29.vwGKePVA9rm8SrgSqeG8pyq_dNO0vEZ4QAZ-sjL4dlMvhMuvJgFVXsXjJn7K-rtllOq_'
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
