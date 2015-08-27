import React, { Component } from 'react';
import reqwest from 'reqwest';

import config from '../config';
import Authentication from '../src/Authentication';

export default class AddRecipe extends Component {

    handleSubmit(e) {
        e.preventDefault();

        var recipeUrl = React.findDOMNode(this.refs.recipeUrl).value.trim();
        reqwest({
            url: config.api.url + '/recipes',
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + Authentication.getAccessToken()
            },
            data: JSON.stringify({ url: recipeUrl }),
            contentType: 'application/json'
        }).then((recipe) => {
            this.setState(recipe);
        });
    }

    render() {
        return (
            <div>
                <h1>Ajouter une recette</h1>

                <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="Entrer l'URL de la recette" ref="recipeUrl"/>
                </form>
            </div>
        );
    }
}
