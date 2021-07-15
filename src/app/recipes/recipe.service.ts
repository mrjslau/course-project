import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable({providedIn: 'root'})
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

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

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }

    overwriteRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(recipes);
    }

    updateRecipe(index: number, name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
        this.recipes[index].name = name;
        this.recipes[index].description = description;
        this.recipes[index].imagePath = imagePath;
        this.recipes[index].ingredients = ingredients;
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
    }
}