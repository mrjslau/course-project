import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Ceasar Salad', 'Tasty Salad with some chicken and a fat sauce.', 'https://image.brigitte.de/11711448/t/KU/v3/w960/r1/-/caesars-salad.jpg', [
            new Ingredient('lettuce', 2),
            new Ingredient('chicken', 1)
        ]),
        new Recipe('Another Salad', 'Tasty Salad with some chicken and the same picture.', 'https://image.brigitte.de/11711448/t/KU/v3/w960/r1/-/caesars-salad.jpg', [
            new Ingredient('lettuce', 3),
            new Ingredient('chicken', 1),
            new Ingredient('mayo', 0.5)
        ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}