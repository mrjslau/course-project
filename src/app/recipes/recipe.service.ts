import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable({providedIn: 'root'})
export class RecipeService {
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
        return this.recipes;
    }

    getRecipe(id: number): Recipe {
        const arr = this.recipes.filter(f => f.id == id);

        if(arr?.length > 0)
            return arr[0];

        return null;
    }
}