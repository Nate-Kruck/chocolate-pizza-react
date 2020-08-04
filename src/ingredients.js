import React, { Component } from 'react';
import { ingredients, IngredientList } from './data.js';
import bg from './assets/list-bg.png';

export default class Ingredients extends Component {
    render() {
        return (
            <div>
                <section>
                <img src={bg} alt=""/>
                <ul>
                    { ingredients.map((listItem) =>  {
                        return <IngredientList 
                        ingredientItem = { listItem.ingredient } />
                    })
                }
                </ul>
                </section>
            </div>
        )
    }
}
