import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor (private httpClient: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.httpClient.put(
      'https://course-project-angular-2021-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
      recipes
    )
    .subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes() {
    this.httpClient.get<Recipe[]>(
      'https://course-project-angular-2021-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
    )
    .subscribe(
      recipes => {
        this.recipeService.overwriteRecipes(recipes);
      }
    );
  }
}