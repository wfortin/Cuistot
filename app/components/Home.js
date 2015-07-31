import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Home extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/recipes">Recipes</Link>
                </nav>
                <h1>Home, dawg</h1>
            </div>
        );
    }
}


