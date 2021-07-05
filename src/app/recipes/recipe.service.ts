import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Tasty Salad', 'https://image.brigitte.de/11711448/t/KU/v3/w960/r1/-/caesars-salad.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}