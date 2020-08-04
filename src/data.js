import React, { Component } from "react";

export const ingredients = [
    {ingredient: '1 1/2 cups Milk'},
    {ingredient: '1/2 cup mascarpone'},
    {ingredient: '1/2 tsp pink salt'},
    {ingredient: '1 lb Black Mission Figs'},
    {ingredient: '1/2 cup brown sugar'},
    {ingredient: '2-4 tbsp water'},
    {ingredient: '1/2 cups heavy cream'},
    {ingredient: '1/3 granulated sugar'},
    {ingredient: '2 egg yolks'},
    {ingredient: '1 lemon, juiced'},
    {ingredient: '2 tbsp butter'},
    {ingredient: '1 cup honey roasted pecans, roughly chopped'}
]

export class IngredientList extends Component {
    render() {
        return (
        <li>{this.props.ingredientItem}</li>
        )
    }
}

