import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'First Recipe',
            'This is the description of my 1st recipe.',
            'https://cdn.pixabay.com/photo/2017/02/21/08/49/food-2085075_960_720.png',
            [
                new Ingredient('Ingredient-1', 4),
                new Ingredient('Ingredient-2', 2),
                new Ingredient('Ingredient-3', 5)
            ]
        ),
        new Recipe(
            'Second Recipe',
            'This is the description of my 2nd recipe.',
            'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png',
            [
                new Ingredient('Ingredient-4', 2),
                new Ingredient('Ingredient-5', 3)
            ]
        )
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
