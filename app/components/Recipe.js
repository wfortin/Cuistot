import React, { Component } from 'react';

import '../css/Recipe.css';

export default class Recipe extends Component {
    render() {
        var recipeBackground = {
            backgroundImage: 'url(' + this.props.image + ')'
        };

        return (
            <div className="recipe" style={recipeBackground}>
                <div className="container">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}
